import type { Meta, Story } from '@storybook/react';
import { Typography } from 'components';

import { ThemeProvider } from '../../theme';
import type { Props } from './Column';
import Column from './Column';

export default {
  title: 'Common/Column',
  component: Column,
} as Meta;

export const Default: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Column {...args}>
          <Typography as="h1">Hello</Typography>
          <Typography as="h1">There</Typography>
        </Column>
      </div>
    </ThemeProvider>
  );
};
Default.args = {};
