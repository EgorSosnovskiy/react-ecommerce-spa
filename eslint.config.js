import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  js.configs.recommended,

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
        },
      ],
      'simple-import-sort/exports': 'error',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  eslintConfigPrettier,
];
