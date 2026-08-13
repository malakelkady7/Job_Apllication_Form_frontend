import { Check } from "lucide-react";
import { STEPS } from "../../types/application";

interface StepperProps {
  currentStepIndex: number;
  onStepClick: (index: number) => void;
}

export default function Stepper({
  currentStepIndex,
  onStepClick,
}: StepperProps) {
  return (
    <div className="flex items-start">
      {STEPS.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;
        const isLast = index === STEPS.length - 1;

        return (
          <div
            key={step.key}
            className={`flex items-center ${isLast ? "" : "flex-1"}`}
          >
            <button
              type="button"
              onClick={() => onStepClick(index)}
              disabled={index > currentStepIndex}
              className="flex flex-col items-center gap-2"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-semibold transition ${
                  isActive
                    ? "bg-rowad-blue text-white"
                    : isCompleted
                      ? "bg-rowad-blue/10 text-rowad-blue"
                      : "bg-gray-100 text-rowad-gray"
                }`}
              >
                {isCompleted ? <Check size={16} /> : index + 1}
              </span>
              <span
                className={`w-24 text-center text-sm font-medium leading-tight ${
                  isActive ? "text-rowad-navy" : "text-rowad-gray"
                }`}
              >
                {step.label}
              </span>
            </button>
            {!isLast && (
              <div
                className={`mx-2 mb-6 h-px flex-1 ${
                  isCompleted ? "bg-rowad-blue" : "bg-rowad-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}