module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module", "project": "./tsconfig.json" },
  settings: { react: { version: "18.2" }, "import/extensions": [".js", ".jsx", ".ts", ".tsx"], },
  plugins: ["react-refresh", "prettier", "import" ],
  rules: {
    "prettier/prettier": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  parser: "@typescript-eslint/parser",
}
