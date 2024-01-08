import antfu from '@antfu/eslint-config';

// @ts-expect-error 型定義がパッケージにない
import nextPlugin from '@next/eslint-plugin-next';

export default antfu(
  {
    vue: false,
    ignores: ['node_modules', '.next'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
);
