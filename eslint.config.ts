import antfu from '@antfu/eslint-config'

// @ts-expect-error 型定義がパッケージにない
import nextPlugin from '@next/eslint-plugin-next'

// @ts-expect-error 型定義がパッケージにない
import unUsedimport from 'eslint-plugin-unused-imports'

// @ts-expect-error 型定義がパッケージにない
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    vue: false,
    ignores: ['node_modules', '.next', 'tailwind.config.ts'],
    rules: {
      'style/indent': 'off',
      'ts/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
      'unused-imports': unUsedimport,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
  }),
)
