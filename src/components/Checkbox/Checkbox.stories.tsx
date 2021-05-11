import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from 'theme';

import type { Props } from './Checkbox';
import Checkbox from './Checkbox';

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
} as Meta;

export const Playground: Story<Props> = () => {
  const [value, setValue] = useState(false);

  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Checkbox value={value} setValue={setValue} />
      </div>
    </ThemeProvider>
  );
};
Playground.args = {};
