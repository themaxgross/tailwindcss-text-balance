const esbuild = require('esbuild')
const path = require('path')

esbuild.build({
  entryPoints: [path.resolve(__dirname, './src/index.ts')],
  outfile: path.resolve(__dirname, './dist/index.js'),
  bundle: true,
  minify: true,
})
