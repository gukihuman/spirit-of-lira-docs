import markdown from "vite-plugin-vue-markdown"

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],

  // css: ["@/tailwind.css", "@/node_modules/prismjs/themes/prism-tomorrow.css"],
  css: ["@/tailwind.css", "@/synthwave.css"],

  // local build not working with sourcemap
  sourcemap: false,

  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      markdown({
        include: /\.md(\?.+)?$/,
      }),
    ],
  },
  extensions: [".md"],
})
