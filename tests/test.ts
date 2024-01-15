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

it('should output the text-wrap:wrap css', async () => {
  const { css } = await postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-wrap' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined })

  expect(css).toMatchInlineSnapshot(`
    ".text-wrap {
        text-wrap: wrap
    }"
  `)
})

it('should output the text-wrap:nowrap css', async () => {
  const { css } = await postcss([
    require('tailwindcss')({
      content: [{ raw: 'text-nowrap' }],
      plugins: [plugin],
      corePlugins: { preflight: false },
    }),
  ]).process('@tailwind utilities;', { from: undefined })

  expect(css).toMatchInlineSnapshot(`
    ".text-nowrap {
        text-wrap: nowrap
    }"
  `)
})