import type { Meta, Story } from '@storybook/react';
import { Typography } from 'components';

import { ThemeProvider } from '../../theme';
import type { Props } from './Row';
import Row from './Row';

export default {
  title: 'Common/Row',
  component: Row,
} as Meta;

export const Default: Story<Props> = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 400 }}>
        <Row {...args}>
          <Typography as="h1">Hello</Typography>
          <Typography as="h1">There</Typography>
        </Row>
      </div>
    </ThemeProvider>
  );
};
Default.args = {};
