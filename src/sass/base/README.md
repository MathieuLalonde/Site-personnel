# Base

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, and probably a stylesheet (that I’m used to calling `_base.scss`), defining some standard styles for commonly used HTML elements.

_base.scss
_reset.scss
_typography.scss

*Note — If your project uses a lot of CSS animations, you might consider adding an \_animations.scss file in there containing the @keyframes definitions of all your animations. If you only use them sporadically, let them live along the selectors that use them.

Reference: [Sass Guidelines](https://sass-guidelin.es/) > [Architecture](https://sass-guidelin.es/#architecture) > [Base folder](https://sass-guidelin.es/#base-folder)
