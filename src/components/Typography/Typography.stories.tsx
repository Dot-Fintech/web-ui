import type { Meta, Story } from '@storybook/react';

import { ThemeProvider } from '../../theme';
import type { Props } from './Typography';
import Typography from './Typography';

export default {
  title: 'Common/Typography',
  component: Typography,
} as Meta;

export const Playground: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <Typography {...args}>
        The quick brown fox jumped over the lazy dog
      </Typography>
    </ThemeProvider>
  );
};
Playground.args = {};
