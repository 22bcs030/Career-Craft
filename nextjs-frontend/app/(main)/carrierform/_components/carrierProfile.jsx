"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertCircle, HelpCircle, InfoIcon } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useFetch from "@/hooks/use-fetch";
import { onboardingSchema } from "@/app/lib/schema";

console.log(onboardingSchema);

import { updateUser, getUser } from "@/actions/user";

export default function CarrierProfile({ industries }) {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [progress, setProgress] = useState(0);

  const [selectedIndustryValue, setSelectedIndustryValue] = useState("");
  const [selectedSpecializationValue, setSelectedSpecializationValue] = useState("");

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
    watch,
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      industry: "",
      subIndustry: "",
      experience: "",
      skills: "",
      bio: "",
    },
    mode: "onChange"
  });

  // Helper text for fields
  const fieldHelp = {
    industry: "Select the industry that best represents your professional field",
    subIndustry: "Choose a specialization within your selected industry",
    experience: "Enter your years of professional experience (0-50)",
    skills: "List your key professional skills, separated by commas",
    bio: "Provide a brief professional background, achievements, and career goals"
  };

  // Calculate form completion progress
  useEffect(() => {
    const formValues = getValues();
    const totalFields = Object.keys(formValues).length;
    const filledFields = Object.values(formValues).filter(val => val && val.toString().trim() !== "").length;
    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [watch(), getValues]);

  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoadingUser(true);
        const user = await getUser();
        if (user) {
          setUserData(user);
          
          const [industryId, subIndustry] = (user.industry || "").split("-");
          
          // Update both form and select states
          reset({
            industry: industryId || "",
            subIndustry: subIndustry || "",
            experience: user.experience || 0, // Changed from "" to 0
            skills: user.skills || "",
            bio: user.bio || "",
          });

          // Set select component states
          setSelectedIndustryValue(industryId || "");
          setSelectedSpecializationValue(subIndustry || "");

          if (industryId) {
            setSelectedIndustry(
              industries.find((ind) => ind.id === industryId)
            );
          }

          // Flip the logic - if onboardingCompleted is false, profile is editable
          setIsEditing(!user.onboardingCompleted);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data");
        toast.error("Failed to load user data");
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUserData();
  }, [reset, industries]);

  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
        onboardingCompleted: true,
      });
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("Failed to save profile. Please try again.");
    }
  };

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile saved successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading, router]);

  const watchIndustry = watch("industry");
  const formValues = watch();

  // Loading state
  if (loadingUser) {
    return (
      <div className="flex flex-col items-center justify-center p-12 min-h-[60vh]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading your profile...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 border border-destructive rounded-md bg-destructive/10 text-destructive">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Error Loading Profile</h3>
            <p className="text-sm text-destructive/90">{error}</p>
            <Button 
              variant="outline" 
              className="mt-4 border-destructive/30 hover:bg-destructive/20" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] min-h-screen py-5 px-4 relative overflow-hidden"> 
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#6A1B9A] rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#C62828] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-60 h-60 bg-[#1565C0] rounded-full filter blur-3xl"></div>
      </div>

      {/* Profile status message */}
      {!isEditing && (
        <div className="w-full max-w-lg mb-6 p-4 border border-[#F57C00]/30 rounded-md bg-gradient-to-r from-[#F57C00]/10 to-[#FFC107]/10 text-white backdrop-blur-sm z-10">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 text-[#FFC107] flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Welcome back!</h3>
              <p className="text-sm text-[#E0E0E0]">
                Your profile is already set up. Feel free to update any information below.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div className="w-full max-w-lg mb-4 flex flex-col gap-2 z-10">
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#E0E0E0] font-medium">Profile completion</span>
          <span className="text-sm font-bold bg-gradient-to-r from-[#F57C00] to-[#FFC107] bg-clip-text text-transparent">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-[#282828] rounded-full overflow-hidden p-0.5 border border-[#333333]">
          <div 
            className="h-full bg-gradient-to-r from-[#C62828] to-[#F57C00] rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(245,124,0,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Card className="w-full max-w-lg border border-[#333333] bg-[#121212] shadow-xl relative overflow-hidden backdrop-blur-sm z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/5 via-transparent to-[#1565C0]/5"></div>
        <CardHeader className="bg-[#1A1A1A] border-b border-[#282828] relative z-10">
          <CardTitle className="bg-gradient-to-r from-[#F57C00] via-[#FFC107] to-[#1565C0] bg-clip-text text-transparent text-4xl font-bold">
            {isEditing ? "Update Your Profile" : "Complete Your Profile"}
          </CardTitle>
          <CardDescription className="text-[#A0A0A0] text-base">
            {isEditing 
              ? "Keep your professional details current to receive the most relevant insights"
              : "Tell us about your professional background to get personalized career recommendations"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-4 pb-2 relative z-10"> 
          <form id="profile-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Industry Selection */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Label htmlFor="industry" className="text-base">Industry</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60">{fieldHelp.industry}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value, { shouldDirty: true, shouldValidate: true });
                  setSelectedIndustryValue(value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                  setSelectedSpecializationValue("");
                }}
                value={selectedIndustryValue}
              >
                <SelectTrigger className={`w-full ${!selectedIndustryValue ? 'text-muted-foreground' : ''} border-border/60 hover:border-primary/60 focus:border-primary transition-colors`}>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.industry.message}
                </p>
              )}
            </div>

            {/* Specialization Selection */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="subIndustry" className="text-base">Specialization</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60">{fieldHelp.subIndustry}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select
                onValueChange={(value) => {
                  setValue("subIndustry", value, { shouldDirty: true, shouldValidate: true });
                  setSelectedSpecializationValue(value);
                }}
                value={selectedSpecializationValue}
                disabled={!watchIndustry}
              >
                <SelectTrigger className={`w-full ${!selectedSpecializationValue ? 'text-muted-foreground' : ''} border-border/60 hover:border-primary/60 focus:border-primary transition-colors`}>
                  <SelectValue placeholder={watchIndustry ? "Select your specialization" : "First select an industry"} />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectGroup>
                    <SelectLabel>Specializations</SelectLabel>
                    {selectedIndustry?.subIndustries.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.subIndustry && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.subIndustry.message}
                </p>
              )}
            </div>

            {/* Experience Input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="experience" className="text-base">Years of Experience</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60">{fieldHelp.experience}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="E.g., 5"
                className="border-border/60 hover:border-primary/60 focus:border-primary focus-visible:ring-primary transition-colors"
                {...register("experience", {
                  valueAsNumber: true, // Add this to ensure number conversion
                })}
              />
              {errors.experience && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Skills Input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="skills" className="text-base">Skills</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60">{fieldHelp.skills}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="skills"
                placeholder="E.g., Python, JavaScript, Project Management"
                className="border-border/60 hover:border-primary/60 focus:border-primary focus-visible:ring-primary transition-colors"
                {...register("skills")}
              />
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <span>•</span> Separate multiple skills with commas
              </p>
              {errors.skills && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Bio Textarea */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="bio" className="text-base">Professional Bio</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60">{fieldHelp.bio}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Textarea
                id="bio"
                placeholder="Share your professional background, key achievements, and career goals..."
                className="h-36 border-border/60 hover:border-primary/60 focus:border-primary focus-visible:ring-primary transition-colors resize-y"
                {...register("bio")}
              />
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <span>•</span> Keep it concise and professional
                </p>
                <p className="text-sm text-muted-foreground">
                  {formValues.bio?.length || 0}/500
                </p>
              </div>
              {errors.bio && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.bio.message}
                </p>
              )}
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-end border-t border-[#282828] bg-[#1A1A1A] pt-5 pb-5 relative z-10">
          {isEditing && (
            <Button 
              variant="outline" 
              onClick={() => router.push("/dashboard")}
              className="w-full sm:w-auto bg-transparent border-[#333333] text-[#E0E0E0] hover:bg-[#282828] hover:text-[#FFC107]"
            >
              Cancel
            </Button>
          )}
          <Button 
            type="submit" 
            form="profile-form"
            className="w-full sm:w-auto bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white hover:opacity-90 border-none shadow-lg shadow-[#C62828]/20"
            disabled={updateLoading}
          >
            {updateLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : isEditing ? (
              "Save Changes"
            ) : (
              "Complete Profile"
            )}
          </Button>
        </CardFooter>
      </Card>

      {!isEditing && progress < 100 && (
        <p className="mt-4 text-sm text-muted-foreground max-w-lg text-center">
          Complete all fields to get the most personalized career insights and recommendations.
        </p>
      )}
    </div>
  );
}