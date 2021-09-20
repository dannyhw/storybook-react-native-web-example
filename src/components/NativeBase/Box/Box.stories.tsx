import {ComponentMeta} from '@storybook/react';
import {NativeBaseProvider} from 'native-base';

import {Box} from './Box';

export default {
  title: 'libraries/native-base/Box',
  component: Box,
  decorators: [
    Story => (
      <NativeBaseProvider>
        <Story />
      </NativeBaseProvider>
    ),
  ],
} as ComponentMeta<typeof Box>;

export const Basic = {
  args: {},
};
