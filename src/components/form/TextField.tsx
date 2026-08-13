import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function TextField({
  label,
  required,
  id,
  ...inputProps
}: TextFieldProps) {
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
      <input
        id={inputId}
        {...inputProps}
        className="w-full rounded-lg border border-rowad-border bg-white px-5 py-3.5 text-lg text-rowad-navy placeholder:text-rowad-gray outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
      />
    </div>
  );
}