module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
