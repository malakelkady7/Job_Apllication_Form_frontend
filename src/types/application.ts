export interface GeneralInfo {
  positionApplyingFor: string;
  expectedSalary: string;
  currency: string;
  hearAboutUs: string;
  militaryStatus: string;
  graduationYear: string;
  referredBy: string;
  referralContact: string;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  nationality: string;
}

export interface ProfessionalBackground {
  currentJobTitle: string;
  currentCompany: string;
  yearsOfExperience: string;
  noticePeriod: string;
  linkedInUrl: string;
  cvFile: File | null;
}

export interface BackgroundVerification {
  hasCriminalRecord: string;
  eligibleToWork: string;
  previouslyEmployedHere: string;
  backgroundCheckConsent: boolean;
}

export interface AdditionalInfo {
  coverLetter: string;
  availableStartDate: string;
  howDidYouHear: string;
  additionalNotes: string;
}

export interface ApplicationFormData {
  general: GeneralInfo;
  personal: PersonalInfo;
  professional: ProfessionalBackground;
  verification: BackgroundVerification;
  additional: AdditionalInfo;
}

export const STEP_KEYS = [
  "general",
  "personal",
  "professional",
  "verification",
  "additional",
] as const;

export type StepKey = (typeof STEP_KEYS)[number];

export interface StepConfig {
  key: StepKey;
  label: string;
}

export const STEPS: StepConfig[] = [
  { key: "general", label: "General" },
  { key: "personal", label: "Personal" },
  { key: "professional", label: "Professional Background" },
  { key: "verification", label: "Background Verification" },
  { key: "additional", label: "Additional Information" },
];