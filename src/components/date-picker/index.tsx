import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import Calendar from "./calender";
import { CalendarDays } from "lucide-react";
import type { IDatePickerProps } from "../../types";

export default function DatePicker({ value, onChange, className }: IDatePickerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative w-full`}>
      <div className={`px-3 py-2 rounded-md flex justify-between items-center ${className}`}>
        <p className={`${value === "" && "text-gray-500"}`}>{ value ? dayjs(value).format("MMM D") : "Select date"}</p>
        <CalendarDays
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-gray-600 w-5 h-5"
        />
      </div>

      {isOpen && (
        <Calendar
          value={value}
          onChange={(date) => {
            onChange(date);
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
