import {ComponentMeta} from '@storybook/react';
import BoxStories from '../Box/Box.stories';
import {AppBar} from './AppBar';

export default {
  title: 'libraries/native-base/AppBar',
  component: AppBar,
  decorators: BoxStories.decorators,
} as ComponentMeta<typeof AppBar>;

export const Basic = {
  args: {},
};
