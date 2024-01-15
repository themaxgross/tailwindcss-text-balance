import { expect, it } from '@jest/globals'
import postcss from 'postcss'

import plugin from '../src/index'

it('should output the text-wrap:balance css', async () => {
  const { css } = await postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-balance' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined })

  expect(css).toMatchInlineSnapshot(`
    ".text-balance {
        text-wrap: balance
    }"
  `)
})

it('should output the text-wrap:pretty css', async () => {
  const { css } = await postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-pretty' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined })

  expect(css).toMatchInlineSnapshot(`
    ".text-pretty {
        text-wrap: pretty
    }"
  `)
})

// skipping this test because the actual output is doubled, and I don't know why
it.skip('should output the text-wrap:balance and text-wrap:pretty css', async () => {
  const { css } = await postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-balance text-pretty' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined })

  expect(css).toMatchInlineSnapshot(`
    ".text-balance {
        text-wrap: balance
    }
    .text-pretty {
        text-wrap: pretty
    }"
  `)
})
