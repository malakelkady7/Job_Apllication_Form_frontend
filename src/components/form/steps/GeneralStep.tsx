import TextField from "../TextField";
import SelectField from "../SelectField";
import YearPickerField from "../YearPickerField";
import type { GeneralInfo } from "../../../types/application";
import {
  POSITION_OPTIONS,
  CURRENCY_OPTIONS,
  HEAR_ABOUT_US_OPTIONS,
  MILITARY_STATUS_OPTIONS,
  REFERRAL_OPTIONS,
} from "../../../data/formOptions";

interface GeneralStepProps {
  data: GeneralInfo;
  onChange: (values: Partial<GeneralInfo>) => void;
}

export default function GeneralStep({ data, onChange }: GeneralStepProps) {
  const isReferred = data.referredBy === "Yes";

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      <SelectField
        label="Position Applying for"
        required
        options={POSITION_OPTIONS}
        value={data.positionApplyingFor}
        onChange={(e) => onChange({ positionApplyingFor: e.target.value })}
      />
      <TextField
        label="Expected Salary"
        required
        inputMode="numeric"
        placeholder="e.g. 25000"
        value={data.expectedSalary}
        onChange={(e) =>
          onChange({ expectedSalary: e.target.value.replace(/\D/g, "") })
        }
      />
      <SelectField
        label="Currency"
        required
        options={CURRENCY_OPTIONS}
        value={data.currency}
        onChange={(e) => onChange({ currency: e.target.value })}
      />
      <SelectField
        label="Where did you hear about Us"
        required
        options={HEAR_ABOUT_US_OPTIONS}
        value={data.hearAboutUs}
        onChange={(e) => onChange({ hearAboutUs: e.target.value })}
      />
      <SelectField
        label="What is your Military status"
        required
        options={MILITARY_STATUS_OPTIONS}
        value={data.militaryStatus}
        onChange={(e) => onChange({ militaryStatus: e.target.value })}
      />
      <YearPickerField
        label="Graduation year"
        required
        value={data.graduationYear}
        onChange={(year) => onChange({ graduationYear: year })}
      />
      <SelectField
        label="Are you referred by someone"
        required
        options={REFERRAL_OPTIONS}
        value={data.referredBy}
        onChange={(e) =>
          onChange({
            referredBy: e.target.value,
            // Clear any previously entered contact if they switch back to "No"
            referralContact:
              e.target.value === "Yes" ? data.referralContact : "",
          })
        }
      />

      {isReferred && (
        <TextField
          label="Referral's Email / Employee ID"
          required
          placeholder="e.g. jane.doe@rowad.com or EMP-1024"
          value={data.referralContact}
          onChange={(e) => onChange({ referralContact: e.target.value })}
        />
      )}
    </div>
  );
}