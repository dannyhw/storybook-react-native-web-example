import {types} from '@storybook/addons';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Icon} from './Icon';

export default {
  title: 'libraries/react-native-vector-icons/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStory<typeof Icon> = {
  args: {
    name: 'ab-testing',
  },
};
