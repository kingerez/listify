import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Listify - Task Management Dashboard" },
    { name: "description", content: "A modern task management dashboard built with Remix" },
  ];
};

export default function Index() {
  return <HeroSection userName="Aqeel" />;
}
