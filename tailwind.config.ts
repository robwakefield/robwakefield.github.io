import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0e1116',
        'bg-dark': '#020409',
        'primary': '#e7edf2',
        'secondary': '#888f98',
        'blue': '#477fef',
        'green': '#6cc644',
        'red': '#bd2c00',
        'orange': '#c9510c',
        'purple': '#6e5494',
      }
    },
  },
  plugins: [],
}
export default config
