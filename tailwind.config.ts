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
        footer_bg: "#0077b6",
        switchNight: "#283B67",
        borderBlack: "#0F172A",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
        sm: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        base: "1.125rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
