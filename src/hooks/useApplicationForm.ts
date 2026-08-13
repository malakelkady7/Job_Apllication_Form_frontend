import { useState } from "react";
import type { ApplicationFormData, StepKey } from "../types/application";
import { STEP_KEYS } from "../types/application";

const initialData: ApplicationFormData = {
  general: {
    positionApplyingFor: "",
    expectedSalary: "",
    currency: "",
    hearAboutUs: "",
    militaryStatus: "",
    graduationYear: "",
    referredBy: "",
    referralContact: "",
  },
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    nationality: "",
  },
  professional: {
    currentJobTitle: "",
    currentCompany: "",
    yearsOfExperience: "",
    noticePeriod: "",
    linkedInUrl: "",
    cvFile: null,
  },
  verification: {
    hasCriminalRecord: "",
    eligibleToWork: "",
    previouslyEmployedHere: "",
    backgroundCheckConsent: false,
  },
  additional: {
    coverLetter: "",
    availableStartDate: "",
    howDidYouHear: "",
    additionalNotes: "",
  },
};

export function useApplicationForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<ApplicationFormData>(initialData);

  const currentStepKey: StepKey = STEP_KEYS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === STEP_KEYS.length - 1;

  function updateSection<K extends StepKey>(
    section: K,
    values: Partial<ApplicationFormData[K]>
  ) {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...values },
    }));
  }

  function goNext() {
    setCurrentStepIndex((i) => Math.min(i + 1, STEP_KEYS.length - 1));
  }

  function goBack() {
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }

  function goToStep(index: number) {
    if (index <= currentStepIndex) setCurrentStepIndex(index);
  }

  return {
    formData,
    updateSection,
    currentStepIndex,
    currentStepKey,
    isFirstStep,
    isLastStep,
    goNext,
    goBack,
    goToStep,
  };
}