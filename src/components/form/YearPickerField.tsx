import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronUp, ChevronDown } from "lucide-react";

interface YearPickerFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (year: string) => void;
  id?: string;
}

const YEARS_PER_PAGE = 24; // 6 rows x 4 columns, matches the reference picker
const COLUMNS = 4;

function getInitialRangeStart(selectedYear: number | null) {
  const anchor = selectedYear ?? new Date().getFullYear();
  // Align pages to blocks of YEARS_PER_PAGE so the selected year's page is shown
  return anchor - (anchor % YEARS_PER_PAGE) - 4;
}

export default function YearPickerField({
  label,
  required,
  value,
  onChange,
  id,
}: YearPickerFieldProps) {
  const fieldId = id ?? label.replace(/\s+/g, "-").toLowerCase();
  const [isOpen, setIsOpen] = useState(false);
  const selectedYear = value ? parseInt(value, 10) : null;
  const [rangeStart, setRangeStart] = useState(() =>
    getInitialRangeStart(selectedYear)
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function openPicker() {
    setRangeStart(getInitialRangeStart(selectedYear));
    setIsOpen(true);
  }

  function selectYear(year: number) {
    onChange(String(year));
    setIsOpen(false);
  }

  const years = Array.from({ length: YEARS_PER_PAGE }, (_, i) => rangeStart + i);

  return (
    <div className="relative flex flex-col gap-1.5" ref={wrapperRef}>
      <label htmlFor={fieldId} className="text-lg font-semibold text-rowad-navy">
        {label}
        {required && <span className="text-rowad-red"> *</span>}
      </label>

      <button
        type="button"
        id={fieldId}
        onClick={openPicker}
        className="flex w-full items-center justify-between rounded-lg border border-rowad-border bg-white px-5 py-3.5 text-left text-lg text-rowad-navy outline-none transition focus:border-rowad-blue focus:ring-2 focus:ring-rowad-blue/15"
      >
        <span className={value ? "text-rowad-navy" : "text-rowad-gray"}>
          {value || "Select year"}
        </span>
        <Calendar size={18} className="text-rowad-gray" />
      </button>

      {isOpen && (
        <div className="absolute top-full z-20 mt-2 w-full max-w-xs rounded-xl border border-rowad-border bg-white p-3 shadow-xl shadow-black/10">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRangeStart((s) => s - YEARS_PER_PAGE)}
              className="rounded p-1 text-rowad-gray hover:bg-gray-100"
              aria-label="Previous years"
            >
              <ChevronUp size={16} />
            </button>
          </div>

          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
          >
            {years.map((year) => {
              const isSelected = year === selectedYear;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => selectYear(year)}
                  className={`rounded-full px-2 py-2 text-sm transition ${
                    isSelected
                      ? "bg-rowad-blue font-semibold text-white"
                      : "text-rowad-navy hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRangeStart((s) => s + YEARS_PER_PAGE)}
              className="rounded p-1 text-rowad-gray hover:bg-gray-100"
              aria-label="Next years"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}