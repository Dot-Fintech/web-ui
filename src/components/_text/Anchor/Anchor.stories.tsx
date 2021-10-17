import type { Meta, Story } from '@storybook/react';

import { ThemeProvider } from '../../../theme';
import { Props } from '../types';
import Anchor from './Anchor';

export default {
  title: 'Common/Anchor',
  component: Anchor,
} as Meta;

export const Base: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Anchor {...args} href="https://bing.com">
          Continue
        </Anchor>
      </div>
    </ThemeProvider>
  );
};
Base.args = {};
