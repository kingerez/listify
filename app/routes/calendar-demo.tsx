import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import CalendarWidget from "~/components/CalendarWidget";

export const meta: MetaFunction = () => [
  { title: "Calendar Demo - Listify" },
  { name: "description", content: "Interactive calendar widget showcase" },
];

export default function CalendarDemoPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hide default header */}
      <style
        dangerouslySetInnerHTML={{ __html: `body > header { display: none; }` }}
      />
      <div className="container-app py-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Calendar Widget Demo
        </h1>
        <CalendarWidget
          initialYear={selectedDate.getFullYear()}
          initialMonth={selectedDate.getMonth() + 1}
          selectedDate={selectedDate}
          onSelectDate={(date) => setSelectedDate(date)}
        />
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Selected Date: {selectedDate.toDateString()}
        </p>
      </div>
    </div>
  );
} 