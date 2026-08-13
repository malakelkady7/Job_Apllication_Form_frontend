import Hero from "./components/layout/Hero";
import Stepper from "./components/form/Stepper";
import NavigationButtons from "./components/form/NavigationButtons";
import GeneralStep from "./components/form/steps/GeneralStep";
import PersonalStep from "./components/form/steps/PersonalStep";
import ProfessionalBackgroundStep from "./components/form/steps/ProfessionalBackgroundStep";
import BackgroundVerificationStep from "./components/form/steps/BackgroundVerificationStep";
import AdditionalInfoStep from "./components/form/steps/AdditionalInfoStep";
import { useApplicationForm } from "./hooks/useApplicationForm";
import { STEPS } from "./types/application";

function App() {
  const {
    formData,
    updateSection,
    currentStepIndex,
    currentStepKey,
    isFirstStep,
    isLastStep,
    goNext,
    goBack,
    goToStep,
  } = useApplicationForm();

  function handleNext() {
    if (isLastStep) {
      // Hook this up to your submit/API call.
      console.log("Submitting application:", formData);
      return;
    }
    goNext();
  }

  function renderStep() {
    switch (currentStepKey) {
      case "general":
        return (
          <GeneralStep
            data={formData.general}
            onChange={(values) => updateSection("general", values)}
          />
        );
      case "personal":
        return (
          <PersonalStep
            data={formData.personal}
            onChange={(values) => updateSection("personal", values)}
          />
        );
      case "professional":
        return (
          <ProfessionalBackgroundStep
            data={formData.professional}
            onChange={(values) => updateSection("professional", values)}
          />
        );
      case "verification":
        return (
          <BackgroundVerificationStep
            data={formData.verification}
            onChange={(values) => updateSection("verification", values)}
          />
        );
      case "additional":
        return (
          <AdditionalInfoStep
            data={formData.additional}
            onChange={(values) => updateSection("additional", values)}
          />
        );
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <div className="relative z-0">
        <Hero />
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-6 pb-20 sm:-mt-28">
        <div className="rounded-2xl bg-white p-8 shadow-xl shadow-black/10 ring-1 ring-black/5 sm:p-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-rowad-navy sm:text-3xl">
              Apply for a Position
            </h2>
            <span className="text-sm text-rowad-gray">
              Step {currentStepIndex + 1} of {STEPS.length}
            </span>
          </div>

          <div className="mb-10">
            <Stepper
              currentStepIndex={currentStepIndex}
              onStepClick={goToStep}
            />
          </div>

          {renderStep()}

          <NavigationButtons
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onBack={goBack}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default App;