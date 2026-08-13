import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
}

export default function NavigationButtons({
  isFirstStep,
  isLastStep,
  onBack,
  onNext,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {!isFirstStep ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-base font-semibold text-rowad-navy transition hover:bg-gray-100"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      ) : (
        <span />
      )}

      <button
        type="button"
        onClick={onNext}
        className="inline-flex items-center gap-2 rounded-lg bg-rowad-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-rowad-blue-dark"
      >
        {isLastStep ? "Submit" : "Next"}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}