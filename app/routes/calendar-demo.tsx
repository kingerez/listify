import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import CalendarWidget from "~/components/CalendarWidget";

export const meta: MetaFunction = () => {
  return [
    { title: "Calendar Demo - Listify" },
    { name: "description", content: "Showcase of CalendarWidget component" },
  ];
};

export default function CalendarDemoPage() {
  const [selected, setSelected] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelected(date);
    alert(`Selected date: ${date.toDateString()}`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-8">
      <CalendarWidget onDateSelect={handleDateSelect} />
      <div className="container-app pt-8 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          {selected
            ? `You selected: ${selected.toDateString()}`
            : "No date selected yet."}
        </p>
      </div>
    </div>
  );
} 