import SelectField from "../SelectField";
import type { BackgroundVerification } from "../../../types/application";
import { YES_NO_OPTIONS } from "../../../data/formOptions";

interface BackgroundVerificationStepProps {
  data: BackgroundVerification;
  onChange: (values: Partial<BackgroundVerification>) => void;
}

export default function BackgroundVerificationStep({
  data,
  onChange,
}: BackgroundVerificationStepProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      <SelectField
        label="Do you have a criminal record"
        required
        options={YES_NO_OPTIONS}
        value={data.hasCriminalRecord}
        onChange={(e) => onChange({ hasCriminalRecord: e.target.value })}
      />
      <SelectField
        label="Are you eligible to work in Egypt"
        required
        options={YES_NO_OPTIONS}
        value={data.eligibleToWork}
        onChange={(e) => onChange({ eligibleToWork: e.target.value })}
      />
      <SelectField
        label="Have you previously worked at Rowad"
        required
        options={YES_NO_OPTIONS}
        value={data.previouslyEmployedHere}
        onChange={(e) => onChange({ previouslyEmployedHere: e.target.value })}
      />

      <label className="flex items-start gap-3 sm:col-span-2">
        <input
          type="checkbox"
          checked={data.backgroundCheckConsent}
          onChange={(e) =>
            onChange({ backgroundCheckConsent: e.target.checked })
          }
          className="mt-1 h-4 w-4 rounded border-rowad-border text-rowad-blue focus:ring-rowad-blue/30"
        />
        <span className="text-base text-rowad-navy">
          I consent to Rowad performing a background verification check as
          part of this application. <span className="text-rowad-red">*</span>
        </span>
      </label>
    </div>
  );
}