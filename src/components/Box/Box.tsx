import styled from 'styled-components';

import type { AlignmentValue } from '../../types';

export type Props = {
  flexDirection: 'column' | 'row';
  justifyContent?: AlignmentValue;
  alignItems?: AlignmentValue;
  fullWidth?: boolean;
};

/** DO NOT USE THIS COMPONENT. Use Row and Column instead */
const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

export default Box;
