/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      mb: "500px",
      // => @media (min-width: 550px) { ... }

      tl: "600px",
      // => @media (min-width: 600px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "ligh-gray": "#DDDDDD",
        "principal-blue": "#63C4F9",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
