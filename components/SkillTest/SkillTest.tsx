"use client";

import React, { useState } from "react";
import { SubmitDialog } from "../SubmitDialog";
import {
  Calendar,
  ChartNoAxesCombined,
  CheckCheckIcon,
  CheckIcon,
  Trophy,
} from "lucide-react";
import htmlImage from "../assets/html.png";
import Image from "next/image";
import { LineChart } from "../reusables/line-chart";
import { Progress } from "../ui/progress";
import { PieChart } from "../reusables/pie-chart";
import { useStatsStore } from "@/stores/statistics-store";

function SkillTest() {
  const {rank, score, percentile}=useStatsStore();

  const syllabusAnalysis = [
    { topic: "HTML Tools, Forms, History", progress: 80 },
    { topic: "Tags & References in HTML", progress: 60 },
    { topic: "Tables & CSS Basics", progress: 24 },
    { topic: "Tables & CSS Basics", progress: 96 },
  ];

  return (
    <div className="p-2 lg:px-12 px-6 text-lg h-screen w-full overflow-auto">
      <p className="text-gray-500 my-6">Skill Test</p>
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
        <div className="flex flex-col gap-6 lg:w-3/5">
          <div className="flex flex-col lg:flex-row items-center gap-4 border rounded-xl p-4 w-full">
            <Image src={htmlImage} width={80} height={20} alt="image here" />
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <p className="font-bold">Hyper Text Markup Language</p>
              <p className="">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
            <SubmitDialog />
          </div>
          <div className="flex flex-col border rounded-xl p-4">
            <p className="font-bold">Quick Statistics</p>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
              <div className="flex gap-2 border-r w-fit p-2 px-4">
                <div className="mr-2 bg-gray-200 rounded-full items-center flex p-4">
                  <Trophy size={30} />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <p className="font-bold">{rank}</p>
                  <p className="text-gray-500 text-sm">YOUR RANK</p>
                </div>
              </div>

              <div className="flex gap-2 border-r w-fit p-2 px-4">
                <div className="mr-2 bg-gray-200 rounded-full items-center flex p-4">
                  <Calendar size={30} />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <p className="font-bold">{percentile}%</p>
                  <p className="text-gray-500 text-sm">PERCENTILE</p>
                </div>
              </div>

              <div className="flex gap-2 w-fit p-2 px-4">
                <div className="mr-2 bg-gray-200 rounded-full items-center flex p-4">
                  <CheckIcon size={25} />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <p className="font-bold">{score} / 15</p>
                  <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-between py-2">
            <p className="font-bold mb-2">Comparison Graph</p>
            <ChartNoAxesCombined size={50} className="rounded-full bg-gray-100 p-2" />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="flex gap-2">
                <p className={``}>
                  <span className="font-bold">
                    You scored {percentile}% percentile
                  </span>{" "}
                  which is lower than the average percentile 72% of all the
                  engineers who took this assignment.
                </p>
                
              </div>
              <div className="">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/5">
          <div className="flex flex-col border rounded-xl p-4 px-8">
            <p className="font-bold my-4">Syllabus Wise Analysis</p>
            <div className="flex flex-col gap-5">
              {syllabusAnalysis.map((item, index) => (
                <div key={index} className="my-3">
                  <p className="text-gray-600 mb-3 text-lg">{item.topic}</p>
                  <Progress
                    value={item.progress}
                    className="h-3 text-blue-500"
                    // className={`h-3 bg-blue-${Math.min(Math.floor(item.progress / 10) * 100, 900)}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col border rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <p className="font-bold">Question Analysis</p>
              <p className="text-blue-500">{score} / 15</p>
            </div>
            <p className={`text-lg my-2`}>
              <span className="font-bold">
                You scored {score} questions correct out of 15.
              </span>{" "}
              However, It still needs some improvement.
            </p>
            <div className="">
                <PieChart score={parseInt(score)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillTest;
