module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui"],
        montserrat: ["Montserrat"],
        serif: ["ui-serif", "Georgia"],
        mono: ["Roboto Mono"],
        display: ["Boogaloo"],
      },
      colors: {
        "sand-700": "#342946",
      },
    },
  },
  content: [
    "vue/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
}
