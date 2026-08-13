import TextField from "../TextField";
import SelectField from "../SelectField";
import type { PersonalInfo } from "../../../types/application";
import { GENDER_OPTIONS, NATIONALITY_OPTIONS } from "../../../data/formOptions";

interface PersonalStepProps {
  data: PersonalInfo;
  onChange: (values: Partial<PersonalInfo>) => void;
}

export default function PersonalStep({ data, onChange }: PersonalStepProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      <TextField
        label="Full Name"
        required
        placeholder="e.g. Malak Ahmed"
        value={data.fullName}
        onChange={(e) => onChange({ fullName: e.target.value })}
      />
      <TextField
        label="Email Address"
        required
        type="email"
        placeholder="you@example.com"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
      />
      <TextField
        label="Phone Number"
        required
        type="tel"
        placeholder="+20 1xx xxx xxxx"
        value={data.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
      />
      <SelectField
        label="Gender"
        required
        options={GENDER_OPTIONS}
        value={data.gender}
        onChange={(e) => onChange({ gender: e.target.value })}
      />
      <SelectField
        label="Nationality"
        required
        options={NATIONALITY_OPTIONS}
        value={data.nationality}
        onChange={(e) => onChange({ nationality: e.target.value })}
      />
    </div>
  );
}