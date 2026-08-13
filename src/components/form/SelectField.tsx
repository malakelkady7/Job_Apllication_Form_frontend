import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options: string[];
  placeholder?: string;
}

export default function SelectField({
  label,
  required,
  options,
  placeholder = "Select",
  id,
  ...selectProps
}: SelectFieldProps) {
  const selectId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={selectId}
        className="text-lg font-semibold text-rowad-navy"
      >
        {label}
        {required && <span className="text-rowad-red"> *</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          {...selectProps}
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-rowad-border bg-white px-5 py-3.5 text-lg text-rowad-navy outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-rowad-gray"
        />
      </div>
    </div>
  );
}