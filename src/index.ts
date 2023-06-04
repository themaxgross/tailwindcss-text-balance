import plugin from 'tailwindcss/plugin'

const textBalancePlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.text-balance': {
      'text-wrap': 'balance',
    },
  })
})

export default textBalancePlugin
