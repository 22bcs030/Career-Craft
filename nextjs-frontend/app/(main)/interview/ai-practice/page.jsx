"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import VideoInterview from "./_components/video-interview";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AIPracticePage() {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#1565C0] via-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">AI Interview Practice</h1>
        <p className="text-[#A0A0A0]">
          Practice your interview skills with our AI interviewer. Get instant feedback and detailed analysis.
        </p>
      </div>

      <Alert className="mb-6 bg-gradient-to-r from-[#0F0F0F] to-[#121212] border border-[#282828] text-white">
        <Info className="h-4 w-4 text-[#1565C0]" />
        <AlertTitle className="text-[#FFC107]">New Feature: Video Interview</AlertTitle>
        <AlertDescription className="text-[#A0A0A0]">
          Our new video call-based interview feature allows you to practice with a realistic AI interviewer that responds to your voice and provides real-time feedback.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="video" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="bg-[#0F0F0F] border border-[#282828]">
          <TabsTrigger value="video" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
            Video Interview
          </TabsTrigger>
          <TabsTrigger value="technical" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
            Technical Interview
          </TabsTrigger>
          <TabsTrigger value="hr" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
            HR Interview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="video">
          <VideoInterview />
        </TabsContent>

        <TabsContent value="technical">
          <Card className="bg-[#121212] border-[#282828] text-white shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#1565C0]/10 to-[#6A1B9A]/10 border-b border-[#282828]">
              <CardTitle className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">
                Technical Interview Practice
              </CardTitle>
              <CardDescription className="text-[#A0A0A0]">
                Our traditional technical interview practice mode is still available. Try our new video interview experience for a more immersive practice session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-8">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("video");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] text-white rounded-md hover:opacity-90 transition-colors shadow-lg"
                >
                  Try Video Interview
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hr">
          <Card className="bg-[#121212] border-[#282828] text-white shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#6A1B9A]/10 to-[#C62828]/10 border-b border-[#282828]">
              <CardTitle className="bg-gradient-to-r from-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">
                HR Interview Practice
              </CardTitle>
              <CardDescription className="text-[#A0A0A0]">
                Our HR interview practice mode is coming soon. Try our new video interview experience which includes HR questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-8">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("video");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[#6A1B9A] to-[#C62828] text-white rounded-md hover:opacity-90 transition-colors shadow-lg"
                >
                  Try Video Interview
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}