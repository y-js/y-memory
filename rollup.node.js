var pkg = require('./package.json')

export default {
  entry: 'src/y-memory.js',
  moduleName: 'yMemory',
  format: 'umd',
  plugins: [],
  dest: 'y-memory.node.js',
  sourceMap: true,
  banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @license ${pkg.license}
 */
`
}
