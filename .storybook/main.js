const configureWebpack = require('./configureWebpack')

const storybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: configureWebpack
}

module.exports = storybookConfig
