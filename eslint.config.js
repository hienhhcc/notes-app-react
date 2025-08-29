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
    files: ["**/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: { ecmaFeatures: { jsx: true }, sourceType: "module" },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"], // includes exhaustive-deps
      reactRefresh.configs.vite,
    ],
    rules: {
      // prefer TS version of the rule:
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^[A-Z_]" },
      ],

      // make the hook deps rule loud if you want:
      "react-hooks/exhaustive-deps": "error",
    },
  },
]);
