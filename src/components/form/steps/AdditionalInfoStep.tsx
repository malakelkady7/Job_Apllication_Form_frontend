import DateField from "../DateField";
import type { AdditionalInfo } from "../../../types/application";

interface AdditionalInfoStepProps {
  data: AdditionalInfo;
  onChange: (values: Partial<AdditionalInfo>) => void;
}

export default function AdditionalInfoStep({
  data,
  onChange,
}: AdditionalInfoStepProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5">
      <DateField
        label="Available Start Date"
        required
        value={data.availableStartDate}
        onChange={(e) => onChange({ availableStartDate: e.target.value })}
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cover-letter"
          className="text-lg font-semibold text-rowad-navy"
        >
          Cover Letter
        </label>
        <textarea
          id="cover-letter"
          rows={4}
          placeholder="Tell us why you'd be a great fit..."
          value={data.coverLetter}
          onChange={(e) => onChange({ coverLetter: e.target.value })}
          className="w-full resize-none rounded-lg border border-rowad-border bg-white px-5 py-3.5 text-lg text-rowad-navy placeholder:text-rowad-gray outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="additional-notes"
          className="text-lg font-semibold text-rowad-navy"
        >
          Additional Notes
        </label>
        <textarea
          id="additional-notes"
          rows={3}
          placeholder="Anything else you'd like us to know?"
          value={data.additionalNotes}
          onChange={(e) => onChange({ additionalNotes: e.target.value })}
          className="w-full resize-none rounded-lg border border-rowad-border bg-white px-5 py-3.5 text-lg text-rowad-navy placeholder:text-rowad-gray outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
        />
      </div>
    </div>
  );
}