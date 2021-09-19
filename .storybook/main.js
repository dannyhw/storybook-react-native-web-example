module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    };
    config.resolve.extensions = [...config.resolve.extensions, '.web.js'];

    return config;
  },
};
