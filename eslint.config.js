// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // extends: [
    //   js.configs.recommended, // base JS rules
    //   // ...tseslint.configs.recommended, // <-- no spread here
    //   reactHooks.configs["recommended-latest"], // includes exhaustive-deps
    //   reactRefresh.configs.vite, // good DX for Vite + React
    // ],
    rules: {
      // base JS
      ...js.configs.recommended.rules,

      // TypeScript recommended (non type-aware)
      ...tseslint.configs.recommended.rules,

      // React Hooks recommended (includes exhaustive-deps)
      ...reactHooks.configs["recommended-latest"].rules,

      // Vite React Fast Refresh suggestions
      ...reactRefresh.configs.vite.rules,
      // prefer TS version of no-unused-vars
      "no-unused-vars": "off",
      "react-refresh/only-export-components": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^[A-Z_]" },
      ],

      // make missing deps loud if you want
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);
