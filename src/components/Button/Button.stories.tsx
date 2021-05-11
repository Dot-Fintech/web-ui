import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from 'theme';

import type { Props } from './Button';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

export const Playground: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Button {...args}>Continue</Button>
      </div>
    </ThemeProvider>
  );
};
Playground.args = {};
