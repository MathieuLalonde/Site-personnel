// eslint.config.mjs — aligned with LabGo/camaq/CRM/frontend
import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    ignores: [
      '**/dist/**',
      '**/coverage/**',
      'public/**',
      // Raw posts / samples; not valid TS when linted as MD
      'src/blog_content/**',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: {
      'style/semi': ['error', 'always'],
      'style/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'style/arrow-parens': ['error', 'always'],
      'style/quotes': ['error', 'single', { avoidEscape: true }],
      'no-console': 'warn',
      'eol-last': ['warn', 'always'],
      'e18e/prefer-array-at': 'off',
      'e18e/prefer-array-to-sorted': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      'e18e/prefer-static-regex': 'off',
    },
  }
);
