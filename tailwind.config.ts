import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px 0px #0C0C0D0D',
        'custom1': '0px 1px 4px 0px #0C0C0D0D',
        'custom2': '0px 1px 4px 0px #0C0C0D1A',
      },
    },
  },
  plugins: [],
};
export default config;
