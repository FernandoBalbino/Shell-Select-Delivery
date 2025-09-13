/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "gradient-move": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        // Outras animações úteis para seu delivery
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "gradient-move": "gradient-move 3s ease infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      // Cores personalizadas da Shell
      colors: {
        shell: {
          yellow: "#FFD700",
          orange: "#FFA500",
          red: "#FF0000",
        },
      },
      // Gradientes personalizados
      backgroundImage: {
        "shell-gradient": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "gradient-animated":
          "linear-gradient(-45deg, #FFD700, #FFA500, #FF6B35, #F7931E)",
      },
    },
  },
  plugins: [],
};
