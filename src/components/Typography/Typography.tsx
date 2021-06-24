import styled from 'styled-components';

import type { Color } from '../../theme';

type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
type TextAlignOption = 'left' | 'right' | 'center' | 'justify';

export type Props = {
  textColor?: Color;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Typography = styled.span<Props>`
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ textColor, theme }) =>
    textColor ? textColor.toString() : theme.colors.text.primary.toString()};
  margin: 0;
`;

export default Typography;
