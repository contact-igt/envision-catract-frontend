import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#a6c516",
          "green-dark": "#8fa813",
          blue: "#3b7dba",
          "blue-dark": "#2c6396",
        },
      },
    },
  },
  plugins: [],
};

export default config;
