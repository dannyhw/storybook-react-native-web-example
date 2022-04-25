const path = require('path');
const webpack = require('webpack');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  webpackFinal: async (config, {configType}) => {
    return config;
  },
};
