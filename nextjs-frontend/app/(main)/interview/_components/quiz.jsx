"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { generateQuiz, saveQuizResult, generateDailyQuiz } from "@/actions/interview";
import QuizResult from "./quiz-result";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";
import { Badge } from "@/components/ui/badge";

export default function Quiz({ quizType = "technical", questionCount = 15 }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(async () => {
    // Use the appropriate quiz generation function based on the type
    if (quizType === "daily") {
      return await generateDailyQuiz();
    } else {
      return await generateQuiz(quizType, questionCount);
    }
  });

  const {
    loading: savingResult,
    fn: saveQuizResultFn,
    data: resultData,
    setData: setResultData,
  } = useFetch(saveQuizResult);

  useEffect(() => {
    if (quizData) {
      setAnswers(new Array(quizData.length).fill(null));
    }
  }, [quizData]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });
    return (correct / quizData.length) * 100;
  };

  const finishQuiz = async () => {
    const score = calculateScore();
    try {
      await saveQuizResultFn(quizData, answers, score, quizType);
      toast.success("Quiz completed!");
    } catch (error) {
      toast.error(error.message || "Failed to save quiz results");
    }
  };

  const startNewQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowExplanation(false);
    generateQuizFn();
    setResultData(null);
  };

  if (generatingQuiz) {
    return <BarLoader className="mt-4" width={"100%"} color="gray" />;
  }

  // Show results if quiz is completed
  if (resultData) {
    return (
      <div className="mx-2">
        <QuizResult result={resultData} onStartNew={startNewQuiz} />
      </div>
    );
  }

  if (!quizData) {
    return (
      <Card className="mx-2 bg-[#121212] border-[#282828]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            Ready to test your knowledge?
            <Badge variant="outline" className="ml-2 border-[#1565C0] text-[#1565C0]">
              {quizType === "daily" ? "Daily Practice" : 
               quizType === "oa" ? "Online Assessment" :
               quizType === "dsa" ? "DSA Practice" :
               quizType === "ai" ? "AI Interview" : "Technical"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#B0B0B0]">
            This quiz contains {questionCount} questions specific to your industry and
            skills. Take your time and choose the best answer for each question.
          </p>
          {quizType === "daily" && (
            <p className="text-sm mt-2 text-[#B0B0B0]">
              Daily practice helps reinforce your knowledge with quick, focused questions.
            </p>
          )}
          {quizType === "dsa" && (
            <p className="text-sm mt-2 text-[#B0B0B0]">
              These questions focus on data structures and algorithms commonly asked in technical interviews.
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={generateQuizFn} className="w-full bg-[#1565C0] hover:bg-[#1976D2] text-white">
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <Card className="mx-2 bg-[#121212] border-[#282828]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>Question {currentQuestion + 1} of {quizData.length}</span>
          <div className="flex gap-2">
            {quizData[currentQuestion].topic && (
              <Badge variant="outline" className="border-[#1565C0] text-[#1565C0]">{quizData[currentQuestion].topic}</Badge>
            )}
            {quizData[currentQuestion].difficulty && (
              <Badge className={`${
                quizData[currentQuestion].difficulty === "easy" ? "bg-green-800 text-green-100" : 
                quizData[currentQuestion].difficulty === "medium" ? "bg-yellow-800 text-yellow-100" : "bg-red-800 text-red-100"
              }`}>
                {quizData[currentQuestion].difficulty}
              </Badge>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium text-white">{question.question}</p>
        <RadioGroup
          onValueChange={handleAnswer}
          value={answers[currentQuestion]}
          className="space-y-2"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} className="border-[#1565C0] text-[#1565C0]" />
              <Label htmlFor={`option-${index}`} className="text-[#B0B0B0]">{option}</Label>
            </div>
          ))}
        </RadioGroup>

        {showExplanation && (
          <div className="mt-4 p-4 bg-[#1A1A24] rounded-lg border border-[#282828]">
            <p className="font-medium text-white">Explanation:</p>
            <p className="text-[#B0B0B0]">{question.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showExplanation && (
          <Button
            onClick={() => setShowExplanation(true)}
            variant="outline"
            disabled={!answers[currentQuestion]}
            className="border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0]/10"
          >
            Show Explanation
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!answers[currentQuestion] || savingResult}
          className="ml-auto bg-[#1565C0] hover:bg-[#1976D2] text-white"
        >
          {savingResult && (
            <BarLoader className="mt-4" width={"100%"} color="#FFC107" />
          )}
          {currentQuestion < quizData.length - 1
            ? "Next Question"
            : "Finish Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
}
