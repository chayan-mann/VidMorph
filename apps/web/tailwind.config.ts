import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#ffffff",
        primary: "#7c3aed",
        "primary-foreground": "#ffffff",
        secondary: "#1a1a1a",
        "secondary-foreground": "#ffffff",
        accent: "#2a2a2a",
        border: "#2a2a2a",
        muted: "#2a2a2a",
        "muted-foreground": "#a1a1aa",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
}

export default config
