import styled, { css } from 'styled-components';

import type { ThemeTypography } from '../../theme/typography';

export type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
export type TextAlignOption = 'left' | 'right' | 'center' | 'justify';

type Props = {
  tag: keyof ThemeTypography;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Tag = styled.span<Props>`
  ${({ tag, theme }) =>
    css`
      font-family: theme.typography[tag].fontFamily;
      font-size: ${theme.typography[tag].fontFamily};
      font-weight: ${theme.typography[tag].fontFamily};
      line-height: ${theme.typography[tag].fontFamily};
      letter-spacing: ${theme.typography[tag].fontFamily};
    `};
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) =>
    color ? color : theme.colors.text.primary.toString()};
  margin: 0;
`;

export default Tag;
