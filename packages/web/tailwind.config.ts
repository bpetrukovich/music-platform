import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#e0e5f0",
        "text-dim": "#a1a1aa",
        background: "#0e141b",
        "transparent-lighter": "#ffffff1a",
        primary: "#9bb0cf",
        secondary: "#693a78",
        accent: "#ac53a3",
      },
    },
  },
  plugins: [],
};
export default config;
