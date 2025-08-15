const purgecss = require("@fullhuman/postcss-purgecss").default;
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
      safelist: ["body", "html", "root"],
    }),
    autoprefixer(),
    cssnano(),
  ],
};
