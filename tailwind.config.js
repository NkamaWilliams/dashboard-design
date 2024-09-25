/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        "primary": "var(--primary)",
        "primary-muted": "var(--primary-muted)",
        "secondary": "var(--secondary)",
        "alert": "var(--alert)"
      },
      screens: {
        tablet: "900px",
        mobile: "700px"
      }
    },
  },
  plugins: [],
}

