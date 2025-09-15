import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../../button";
import type { ICalenderProps } from "../../../types";


export default function Calendar({ value, onChange }: ICalenderProps) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();
  const startDay = startOfMonth.day();

  const days: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handleClick = (day: Dayjs) => {
    onChange(day.format("YYYY-MM-DD"));
  };

  const clearDate = () => {
    onChange("");
  }

  const goToDateTaday = () => {
    onChange(dayjs().format("YYYY-MM-DD"))
  }

  return (
    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-xl p-4 z-50 w-full">
      <div className="flex items-center justify-between mb-4">
        <Button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          children={<ArrowLeft />}
          className="cursor-pointer"
        />
        <h2 className="font-semibold">{currentMonth.format("MMM YYYY")}</h2>
        <Button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          children={<ArrowRight />}
          className="cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center gap-y-2">
        {days.map((day, idx) => {
          if (!day) return <div key={idx}></div>;
          const dayObj = currentMonth.date(day);
          const selected = dayjs(value).isSame(dayObj, "day");

          return (
            <Button
              label={day}
              key={idx}
              onClick={() => handleClick(dayObj)}
              className={`mx-auto w-8 h-8 flex items-center justify-center rounded-full transition text-sm
               ${selected ? "bg-black text-white" : "hover:bg-gray-100"}
              `}
            />
          );
        })}
      </div>
      <div className="flex justify-around items-center mt-6">
        <Button label={"Clear"} onClick={clearDate} className="cursor-pointer py-2 px-4 rounded-md bg-black text-white font-medium hover:bg-gray-800"/>
        <Button label={"Today"} onClick={goToDateTaday} className="cursor-pointer py-2 px-4 rounded-md bg-black text-white font-medium hover:bg-gray-800"/>
      </div>
    </div>
  );
}
