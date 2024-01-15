import plugin from 'tailwindcss/plugin'

const textBalance = plugin(function({ addUtilities }) {
  addUtilities({
    '.text-balance': {
      'text-wrap': 'balance',
    },
    '.text-pretty': {
      'text-wrap': 'pretty',
    },
  })
})

export default textBalance
