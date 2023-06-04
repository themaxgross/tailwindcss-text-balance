# tailwindcss-text-balance

[![npm](https://img.shields.io/npm/v/tailwindcss-text-balance?style=shield)
](https://www.npmjs.com/package/tailwindcss-text-balance)

Introduces support for the `text-balance` property in Tailwind CSS.

See the [Chrome Developers Blog](https://developer.chrome.com/blog/css-text-wrap-balance/) for more
information.

## Installation

```sh
npm install tailwindcss-text-balance
```

## Usage

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-text-balance'),
  ],
}
```

This plugin generates the following utilities:

```css
.text-balance {
    text-wrap: balance;
}
```

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.