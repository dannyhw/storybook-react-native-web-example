import {ComponentMeta} from '@storybook/react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Card} from './Card';

export default {
  title: 'libraries/react-native-paper/Card',
  component: Card,
  decorators: [
    Story => (
      <PaperProvider theme={DefaultTheme}>
        <Story />
      </PaperProvider>
    ),
  ],
} as ComponentMeta<typeof Card>;

export const Basic = {
  args: {},
};
