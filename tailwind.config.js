// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // Extend the default theme here
      colors: {
        // Example: Add custom colors
        customBlue: "#1E40AF",
        customGreen: "#10B981",
      },
      spacing: {
        // Example: Add custom spacing
        // 128: "32rem",
        // 144: "36rem",
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
