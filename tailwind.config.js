const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      body: [
        'Lexend Deca',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Ubuntu',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      colors: {
        accent: 'rgb(var(--accent) , <alpha-value>)',
        'base-100': 'rgb(var(--base-100) , <alpha-value>)',
        'base-type': 'rgb(var(--base-type) , <alpha-value>)',
        black: 'rgb(var(--black) , <alpha-value>)',
        error: 'rgb(var(--error) , <alpha-value>)',
        gray: 'rgb(var(--gray) , <alpha-value>)',
        info: 'rgb(var(--info) , <alpha-value>)',
        'info-content': 'rgb(var(--info-content) , <alpha-value>)',
        'light-black': 'rgb(var(--light-black), <alpha-value>)',
        'light-gray': 'rgb(var(--light-gray) , <alpha-value>)',
        neutral: 'rgb(var(--neutral) , <alpha-value>)',
        'neutral-focus': 'rgb(var(--neutral-focus) , <alpha-value>)',
        primary: 'rgb(var(--primary) , <alpha-value>)',
        secondary: 'rgb(var(--secondary) , <alpha-value>)',
        success: 'rgb(var(--success) , <alpha-value>)',
        warning: 'rgb(var(--warning) , <alpha-value>)',
        white: 'rgb(var(--white) , <alpha-value>)',
      },
      fontSize: {
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        base: '1rem',
        sm: '0.8rem',
        xl: '1.25rem',
      },
      html: [
        'Lexend Deca',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Ubuntu',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
};
