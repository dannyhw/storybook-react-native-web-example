import {ComponentMeta} from '@storybook/react';
import {StyleSheet, Text, View} from 'react-native';

import {Draggable} from './Draggable';

export default {
  title: 'components/Draggable',
  component: Draggable,
  decorators: [
    Story => (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Draggable>;

export const Basic = {
  args: {
    children: <Text>Hello World</Text>,
  },
};
