const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      body: [
        "Lexend Deca",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Ubuntu",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      colors: {
        accent: "var(--accent)",
        "base-100": "var(--base-100)",
        "base-type": "var(--base-type)",
        black: "var(--black)",
        error: "var(--error)",
        gray: "var(--gray)",
        info: "var(--info)",
        "info-content": "var(--info-content)",
        "light-black": "var(--light-black)",
        "light-gray": "var(--light-gray)",
        neutral: "var(--neutral)",
        "neutral-focus": "var(--neutral-focus)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        warning: "var(--warning)",
        white: "var(--white)",
      },
      fontSize: {
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        base: "1rem",
        sm: "0.8rem",
        xl: "1.25rem",
      },
      html: [
        "Lexend Deca",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Ubuntu",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
};
