import type { MetaFunction } from "@remix-run/node";
import IconDemo from "~/components/IconDemo";

export const meta: MetaFunction = () => {
  return [
    { title: "Icons Demo - Listify" },
    { name: "description", content: "react-icons showcase and testing page" },
  ];
};

export default function IconsDemoPage() {
  return <IconDemo />;
} 