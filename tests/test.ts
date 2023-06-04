import { expect, it } from '@jest/globals'
import postcss from 'postcss'

import plugin from '../src/index'

it('should output the text-wrap:balance css', () => {
  let css = postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-balance' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined }).css

  expect(css).toMatchInlineSnapshot(`
    ".text-balance {
        text-wrap: balance
    }"
  `)
})
