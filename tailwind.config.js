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
        accent: 'rgb(var(--accent))',
        'base-100': 'rgb(var(--base-100))',
        'base-type': 'rgb(var(--base-type))',
        black: 'rgb(var(--black))',
        error: 'rgb(var(--error))',
        gray: 'rgb(var(--gray))',
        info: 'rgb(var(--info))',
        'info-content': 'rgb(var(--info-content))',
        'light-black': 'rgb(var(--light-black))',
        'light-gray': 'rgb(var(--light-gray))',
        neutral: 'rgb(var(--neutral))',
        'neutral-focus': 'rgb(var(--neutral-focus))',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        success: 'rgb(var(--success))',
        warning: 'rgb(var(--warning))',
        white: 'rgb(var(--white))',
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
