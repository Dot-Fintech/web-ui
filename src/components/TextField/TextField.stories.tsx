import type { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'theme';

import type { Props } from './TextField';
import TextField from './TextField';

export default {
  title: 'Common/TextField',
  component: TextField,
} as Meta;

export const Playground: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <TextField {...args} />
      </div>
    </ThemeProvider>
  );
};
Playground.args = {
  placeholder: 'Your email address',
};
