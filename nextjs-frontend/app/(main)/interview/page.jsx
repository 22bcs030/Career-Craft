import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Brain, Code, Video, Target, BarChart, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#1565C0] via-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent drop-shadow-sm">
          Interview Preparation Hub
        </h1>
  
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        
        <div className="bg-gradient-to-r from-[#0F0F0F] to-[#121212] border border-[#282828] p-3 rounded-lg shadow-lg">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
              <BarChart className="h-4 w-4 mr-2 hidden md:inline" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="daily" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
              <Calendar className="h-4 w-4 mr-2 hidden md:inline" />
              Daily Quiz
            </TabsTrigger>
            <TabsTrigger value="oa" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
              <Code className="h-4 w-4 mr-2 hidden md:inline" />
              Online Assessment
            </TabsTrigger>
            <TabsTrigger value="ai-interview" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
              <Video className="h-4 w-4 mr-2 hidden md:inline" />
              AI Interview
            </TabsTrigger>
            <TabsTrigger value="dsa" className="data-[state=active]:bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] data-[state=active]:text-white">
              <Brain className="h-4 w-4 mr-2 hidden md:inline" />
              DSA Practice
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <StatsCards assessments={assessments} />
          
          <Card className="hover:shadow-lg transition-shadow bg-[#121212] border-[#282828] text-white">
            <CardHeader className="bg-gradient-to-r from-[#1565C0]/20 to-[#6A1B9A]/20 border-b border-[#282828]">
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-[#1565C0]" />
                <span className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">Performance Trends</span>
              </CardTitle>
              <CardDescription className="text-[#A0A0A0]">Your progress over time across different assessment types</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceChart assessments={assessments} />
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#FFC107]">Recent Assessments</h2>
              <Link 
                href="/interview/all-assessments"
                className="text-sm font-medium text-[#1565C0] hover:text-[#6A1B9A] flex items-center"
              >
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <QuizList assessments={assessments} />
          </div>
        </TabsContent>

        <TabsContent value="daily" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#1565C0] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#1565C0]/10 to-[#1565C0]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#1565C0]" />
                  <span className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">Daily Practice Quiz</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Quick daily questions to keep your skills sharp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Time Required:</span> 5-10 mins
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Questions:</span> 5
                  </div>
                </div>
                <Link 
                  href="/interview/mock"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  Start Daily Practice
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#6A1B9A] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#6A1B9A]/10 to-[#6A1B9A]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#6A1B9A]" />
                  <span className="bg-gradient-to-r from-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">Daily Progress</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Track your daily practice performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Streak:</span> 3 days
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Avg. Score:</span> 82%
                  </div>
                </div>
                <Link 
                  href="/interview/analytics"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#6A1B9A] to-[#C62828] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  View Progress
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="oa" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#1565C0] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#1565C0]/10 to-[#1565C0]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-[#1565C0]" />
                  <span className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">Customized OA Practice</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Practice AI-generated questions based on your skill level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Completed:</span> 23
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Success Rate:</span> 78%
                  </div>
                </div>
                <Link 
                  href="/interview/oa-practice"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  Start Practice
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#6A1B9A] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#6A1B9A]/10 to-[#6A1B9A]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#6A1B9A]" />
                  <span className="bg-gradient-to-r from-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">Performance Analytics</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Get detailed analysis and improvement recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Top Area:</span> Arrays
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Needs Work:</span> DP
                  </div>
                </div>
                <Link 
                  href="/interview/analytics"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#6A1B9A] to-[#C62828] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  View Analytics
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-interview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#1565C0] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#1565C0]/10 to-[#1565C0]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-[#1565C0]" />
                  <span className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">AI Interview Practice</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Experience realistic interview scenarios with AI feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Sessions:</span> 5
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Avg. Score:</span> 83%
                  </div>
                </div>
                <Link 
                  href="/interview/ai-practice"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  Start AI Interview
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#6A1B9A] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#6A1B9A]/10 to-[#6A1B9A]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-[#6A1B9A]" />
                  <span className="bg-gradient-to-r from-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">Behavioral Analysis</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Get insights into your interview performance and style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Last Analysis:</span> April 2
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Key Strength:</span> Communication
                  </div>
                </div>
                <Link 
                  href="/interview/analysis"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#6A1B9A] to-[#C62828] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  View Analysis
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dsa" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#1565C0] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#1565C0]/10 to-[#1565C0]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-[#1565C0]" />
                  <span className="bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] bg-clip-text text-transparent">DSA Practice</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Practice problems with topic-wise categorization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Solved:</span> 47/136
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Completion:</span> 35%
                  </div>
                </div>
                <Link 
                  href="/interview/dsa-practice"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#1565C0] to-[#6A1B9A] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  Start DSA Practice
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#6A1B9A] bg-[#121212] border-[#282828] text-white">
              <CardHeader className="pb-2 bg-gradient-to-r from-[#6A1B9A]/10 to-[#6A1B9A]/5 border-b border-[#282828]">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#6A1B9A]" />
                  <span className="bg-gradient-to-r from-[#6A1B9A] to-[#C62828] bg-clip-text text-transparent">Progress Tracking</span>
                </CardTitle>
                <CardDescription className="text-[#A0A0A0]">Track progress and get personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4 text-[#A0A0A0]">
                  <div>
                    <span className="font-semibold text-[#FFC107]">Easy:</span> 80%
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Medium:</span> 45%
                  </div>
                  <div>
                    <span className="font-semibold text-[#FFC107]">Hard:</span> 23%
                  </div>
                </div>
                <Link 
                  href="/interview/dsa-progress"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-gradient-to-r from-[#6A1B9A] to-[#C62828] text-white hover:opacity-90 h-10 px-4 py-2 shadow-lg"
                >
                  View Progress
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>


    </div>
  );
}