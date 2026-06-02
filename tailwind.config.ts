import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Renaissance Color Palette
        gold: {
          50: "#FEF9F3",
          100: "#FDF3E3",
          200: "#FAE6C5",
          300: "#F6D29C",
          400: "#F1B668",
          500: "#D4AF77", // Primary gold
          600: "#B8925A",
          700: "#9A7642",
          800: "#7E5F35",
          900: "#664E2C",
        },
        burgundy: {
          50: "#FDF6F6",
          100: "#F9E6E6",
          200: "#F3D0D0",
          300: "#E8B1B1",
          400: "#DC8989",
          500: "#5C2C2C", // Primary burgundy
          600: "#4A2323",
          700: "#3A1C1C",
          800: "#2E1717",
          900: "#251313",
        },
        parchment: {
          50: "#FFFEFC",
          100: "#FEF9F3",
          200: "#FBF2E3",
          300: "#F7E8C7", // Primary parchment
          400: "#F2D9A8",
          500: "#E8C482",
          600: "#D4A95C",
          700: "#B58742",
          800: "#8F6632",
          900: "#6F4C28",
        },
        marble: {
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#D4D4D4",
          300: "#B8B8B8",
          400: "#969696",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#1C1814", // Primary dark marble
          900: "#0F0E0C",
        },
        // Accent colors
        lapis: {
          500: "#264C7A",
          600: "#1E3D61",
          700: "#18304C",
        },
        emerald: {
          500: "#2D5A3D",
          600: "#244931",
          700: "#1C3A26",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        "playfair": ["var(--font-playfair)", "serif"],
        "garamond": ["var(--font-garamond)", "serif"],
      },
      backgroundImage: {
        "parchment": "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
        "gold-leaf": "linear-gradient(135deg, #FEF9F3 0%, #F6D29C 25%, #D4AF77 50%, #F1B668 75%, #FDF3E3 100%)",
        "gold-shimmer": "linear-gradient(45deg, #D4AF77 0%, #F6D29C 50%, #D4AF77 100%)",
        "marble-gradient": "linear-gradient(180deg, #1C1814 0%, #2D2824 100%)",
      },
      boxShadow: {
        "gold": "0 0 20px rgba(212, 175, 119, 0.3)",
        "gold-inner": "inset 0 0 20px rgba(212, 175, 119, 0.2)",
        "parchment": "0 4px 20px rgba(100, 80, 50, 0.15)",
        "ornate": "0 0 30px rgba(212, 175, 119, 0.4), 0 0 60px rgba(212, 175, 119, 0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      borders: {
        "ornate": "3px double #D4AF77",
        "ornate-double": "4px solid #D4AF77",
      },
    },
  },
  plugins: [],
};

export default config;