import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { ThemeProvider } from '../../theme';
import type { Props } from './Banner';
import Banner from './Banner';

export default {
  title: 'Common/Banner',
  component: Banner,
} as Meta;

export const Playground: Story<Props> = (args) => {
  const [_isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Banner {...args} close={close} color="red">
          This is a test banner
        </Banner>
      </div>
    </ThemeProvider>
  );
};
Playground.args = {
  isOpen: true,
};
