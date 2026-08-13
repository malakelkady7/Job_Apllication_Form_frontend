import type { InputHTMLAttributes } from "react";
import { Calendar } from "lucide-react";

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function DateField({
  label,
  required,
  id,
  ...inputProps
}: DateFieldProps) {
  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-lg font-semibold text-rowad-navy"
      >
        {label}
        {required && <span className="text-rowad-red"> *</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="date"
          {...inputProps}
          className="w-full rounded-lg border border-rowad-border bg-white px-5 py-3.5 pr-10 text-lg text-rowad-navy outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
        />
        <Calendar
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-rowad-gray"
        />
      </div>
    </div>
  );
}