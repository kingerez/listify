import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "~/components";
import type { LinksFunction } from "@remix-run/node";

import "./styles/globals.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const handleProfileClick = () => {
    // TODO: Navigate to profile page when implemented
    console.log("Navigate to profile");
  };

  const handleSettingsClick = () => {
    // TODO: Navigate to settings page when implemented
    console.log("Navigate to settings");
  };

  const handleLogoutClick = () => {
    // TODO: Implement logout functionality
    console.log("Logout user");
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Global Header */}
        <Header
          userName="Aqeel"
          onProfileClick={handleProfileClick}
          onSettingsClick={handleSettingsClick}
          onLogoutClick={handleLogoutClick}
        />
        
        {/* Main Content Area */}
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-16">
          {children}
        </main>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
