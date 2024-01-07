import antfu from '@antfu/eslint-config'
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

export default antfu(
  ...compat.extends("next/core-web-vitals"),
)
