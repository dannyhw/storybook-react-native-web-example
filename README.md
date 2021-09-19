To setup a project like this

Setup a react native project
```
npx react-native init RNStorybookWeb --template react-native-template-typescript
```

add react dom and react-native-web

```
cd RNStorybookWeb
yarn add react-dom react-native-web
```

add storybook react to the project

```
npx sb init --type react
```

Edit main.js to look like this:

```
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [...config.resolve.extensions, '.web.js'];

    return config;
  },
};
```