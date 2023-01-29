module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "./class/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // 해당옵션을 끈다고 할 수 있다.
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
  },
};
// yarn add eslint-config-prettier --dev
