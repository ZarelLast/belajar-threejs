import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, vue: pluginVue },
    extends: ["js/recommended", pluginVue.configs["flat/essential"]],
    rules: {
      "vue/multi-word-component-names": "off", // Contoh: Mematikan aturan nama multi-kata
      "vue/html-indent": ["error", 2], // Indentasi HTML 2 spasi
      "vue/no-unused-vars": ["error"], // Peringatan jika ada variabel Vue yang tidak terpakai
      "vue/no-console": "warn", // Peringatan jika ada perintah console.log
    },
  },
]);
