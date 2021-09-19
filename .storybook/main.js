const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    };

    // fix for uncompiled react-native dependencies
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
      ],
      options: {
        presets: [
          '@babel/env',
          '@babel/preset-react',
          'module:metro-react-native-babel-preset',
        ],
        plugins: [
          'react-native-web',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    });

    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader', // or directly file-loader
      include: [
        path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons/MaterialCommunityIcons.js',
        ),
      ],
    });
    config.resolve.extensions = [...config.resolve.extensions, '.web.js'];

    return config;
  },
};
