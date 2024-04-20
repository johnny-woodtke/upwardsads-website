module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: false,
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
}
