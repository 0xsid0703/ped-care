import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-image": "url('/landing.jpg')",
        "review-image": "url('/review.jpg')",
        "video-image": "url('/video.jpg')",
      },
      borderColor: {
        "main-color": "#E51937",
      },
      backgroundColor: {
        "main-color": "#E51937",
      },
      textColor: {
        "main-color": "#E51937",
        description: "#464646",
      },
    },
  },
  plugins: [],
};
export default config;
