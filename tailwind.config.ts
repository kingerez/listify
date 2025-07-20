import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        // Figma Color Palette (top to bottom)
        coral: "#F23834",          // Red/coral color
        orange: "#F0A868",         // Orange/peach color  
        salmon: "#F87777",         // Pink/salmon color
        linen: "#F0D1A8",          // Light cream/beige color
        lavender: "#C4A49F",       // Light purple/lavender color
        sage: "#5C9967",           // Green color
        charcoal: "#4B332F",       // Dark gray/charcoal color
        
        // Semantic color mapping
        primary: "#0B87AC",        // Blue for primary actions
        success: "#5C9967",        // Green for success states  
        warning: "#F0A868",        // Orange for warnings
        error: "#F23834",          // Red for errors
        
        // Surface colors
        background: "#FAF7F2",     // Main background
        surface: "#FFFFFF",        // Card/surface background
        "surface-secondary": "#F0D1A8", // Secondary surface (linen)
        
        // Text colors
        "text-primary": "#4B332F",     // Primary text (charcoal)
        "text-secondary": "#63605F",   // Secondary text
        "text-muted": "#6B7280",       // Muted text
        
        // Button colors
        "button-primary": "#5C9967",   // Primary button (sage)
        "button-secondary": "#F0D1A8", // Secondary button (linen)  
        "button-danger": "#F23834",    // Danger button (coral)
      },
    },
  },
  plugins: [],
} satisfies Config;
