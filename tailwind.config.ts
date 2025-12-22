import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: { brand: {
        DEFAULT: '#1E40AF',
      }},
    }
  },
  plugins: [],
}