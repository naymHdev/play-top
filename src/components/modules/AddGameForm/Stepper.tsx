"use client";

import { steps } from "@/constants/gameForm";
import { Check } from "lucide-react";

export const StepIndicator = ({
  stepIndex,
  currentStep,
}: {
  stepIndex: number;
  currentStep: number;
}) => {
  const isCompleted = stepIndex < currentStep;
  const isActive = stepIndex === currentStep;

  return (
    <div className="flex flex-col items-center justify-between text-white">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10
        ${
          isCompleted
            ? "bg-green-500"
            : isActive
            ? "border-2 border-green-500"
            : "bg-gray-700"
        }`}
      >
        {isCompleted ? <Check className="w-4 h-4" /> : `0 ${stepIndex + 1}`}
      </div>
      {stepIndex !== steps.length - 1 && (
        <div
          className={`h-[35rem] w-1 bg-foreground  ${
            isCompleted
              ? "bg-green-500"
              : isActive
              ? "border-2 border-green-500"
              : "bg-gray-700"
          }`}
        ></div>
      )}
    </div>
  );
};
