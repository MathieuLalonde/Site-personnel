const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      // index.html lives at repo root (not under src) — must be scanned or `body` / `html` rules get purged.
      content: ['./index.html', './src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
      safelist: {
        greedy: [/^body$/, /^html$/, /^#root$/],
      },
    }),
    autoprefixer(),
    cssnano(),
  ],
};
