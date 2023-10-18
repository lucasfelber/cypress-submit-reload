import { defineConfig } from "cypress"
import { defineNuxtConfig } from "nuxt/config"

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: defineNuxtConfig
    }
  },

  e2e: {
    baseUrl: "http://localhost:3000"
    // setupNodeEvents (on, config) {
    //   // implement node event listeners here
    // }
  }
})