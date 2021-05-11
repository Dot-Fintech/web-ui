import './Modal.css';

import type { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'theme';

import type { Props } from './Modal';
import Modal from './Modal';

export default {
  title: 'Common/Modal',
  component: Modal,
} as Meta;

export const Playground: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Modal {...args}>This is a test modal</Modal>
      </div>
    </ThemeProvider>
  );
};
Playground.args = {};
