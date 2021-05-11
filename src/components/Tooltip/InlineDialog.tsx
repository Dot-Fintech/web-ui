import { TooltipPrimitive, TooltipPrimitiveProps } from '@atlaskit/tooltip';
import React from 'react';
import styled from 'styled-components';

const Dialog = styled(TooltipPrimitive)`
  background: ${({ theme }) => theme.colors.background.secondary.toString()};
  color: ${({ theme }) => theme.colors.text.primary.toString()};
  padding: 8px;
  font-family: Roboto;
  max-width: 200px;
  border-radius: 8px;
`;

type Ref = HTMLDivElement;

type Props = Pick<
  TooltipPrimitiveProps,
  'style' | 'className' | 'children' | 'placement' | 'testId' | 'truncate'
> &
  React.RefAttributes<HTMLDivElement>;

const InlineDialog = React.forwardRef<Ref, Props>((props, ref) => {
  return <Dialog ref={ref} {...props} />;
});

export default InlineDialog;
