/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'md2': '806px',
      'lg': '1024px',
      'lg2': '1152px',
      'xl': '1280px',
      'xl2': '1408px',
      '2xl': '1536px',
      '3xl': '1792px'
    }
  },
  plugins: [],
};
