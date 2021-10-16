import type { Meta, Story } from '@storybook/react';
import { Typography } from 'components';

import { ThemeProvider } from '../../theme';
import type { Props } from './Button';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

export const Default: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Button {...args}>Continue</Button>
      </div>
    </ThemeProvider>
  );
};
Default.args = {};

export const Lean: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Button {...args}>
          <Typography as="p">Continue</Typography>
        </Button>
      </div>
    </ThemeProvider>
  );
};
Lean.args = {};
