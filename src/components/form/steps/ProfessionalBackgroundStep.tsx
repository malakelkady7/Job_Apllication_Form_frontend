import { Upload } from "lucide-react";
import TextField from "../TextField";
import SelectField from "../SelectField";
import type { ProfessionalBackground } from "../../../types/application";
import { NOTICE_PERIOD_OPTIONS } from "../../../data/formOptions";

interface ProfessionalBackgroundStepProps {
  data: ProfessionalBackground;
  onChange: (values: Partial<ProfessionalBackground>) => void;
}

export default function ProfessionalBackgroundStep({
  data,
  onChange,
}: ProfessionalBackgroundStepProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      <TextField
        label="Current Job Title"
        placeholder="e.g. Site Engineer"
        value={data.currentJobTitle}
        onChange={(e) => onChange({ currentJobTitle: e.target.value })}
      />
      <TextField
        label="Current Company"
        placeholder="e.g. ABC Construction"
        value={data.currentCompany}
        onChange={(e) => onChange({ currentCompany: e.target.value })}
      />
      <TextField
        label="Years of Experience"
        required
        type="number"
        placeholder="e.g. 3"
        value={data.yearsOfExperience}
        onChange={(e) => onChange({ yearsOfExperience: e.target.value })}
      />
      <SelectField
        label="Notice Period"
        required
        options={NOTICE_PERIOD_OPTIONS}
        value={data.noticePeriod}
        onChange={(e) => onChange({ noticePeriod: e.target.value })}
      />
      <TextField
        label="LinkedIn Profile URL"
        placeholder="https://linkedin.com/in/..."
        value={data.linkedInUrl}
        onChange={(e) => onChange({ linkedInUrl: e.target.value })}
      />

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="text-sm font-medium text-rowad-navy">
          Upload CV / Resume <span className="text-rowad-red">*</span>
        </label>
        <label
          htmlFor="cv-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-rowad-border bg-white px-4 py-8 text-center transition hover:border-rowad-blue"
        >
          <Upload size={20} className="text-rowad-blue" />
          <span className="text-sm text-rowad-navy">
            {data.cvFile ? data.cvFile.name : "Click to upload PDF or Word file"}
          </span>
          <span className="text-xs text-rowad-gray">Max size 5MB</span>
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => onChange({ cvFile: e.target.files?.[0] ?? null })}
          />
        </label>
      </div>
    </div>
  );
}
