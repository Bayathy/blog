import antfu from '@antfu/eslint-config'

// @ts-expect-error 型定義がパッケージにない
import nextPlugin from '@next/eslint-plugin-next'

// @ts-expect-error 型定義がパッケージにない
import unUsedimport from 'eslint-plugin-unused-imports'

// @ts-expect-error 型定義がパッケージにない
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    vue: false,
    ignores: ['node_modules', '.next', 'tailwind.config.ts'],
    rules: {
      'ts/no-unused-vars': 'off',
    },
  },
  {
    plugins: {
      '@next/next': nextPlugin,
      'unused-imports': unUsedimport,
      'tailwindcss': tailwindcssPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
)
