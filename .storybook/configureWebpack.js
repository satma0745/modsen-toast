const path = require('path')

const resolve = (dir) => {
  const root = path.join(__dirname, '../')
  return path.join(root, dir)
}

const configureAliases = (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': resolve('./src/components'),
    '@hooks': resolve('./src/hooks'),
    '@data': resolve('./src/data')
  }
}

const configureSvgr = (config) => {
  const svgLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  )
  svgLoaderRule.exclude = /\.svg$/

  config.module.rules.push({
    test: /\.svg$/,
    use: [{ loader: '@svgr/webpack' }]
  })
}

const configureWebpack = (config) => {
  configureAliases(config)
  configureSvgr(config)

  return config
}

module.exports = configureWebpack
