import styled from 'styled-components';
import type { ThemeTypography } from 'theme/typography';

export type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
export type TextAlignOption = 'left' | 'right' | 'center' | 'justify';

type Props = {
  tag: keyof ThemeTypography;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Tag = styled.span<Props>`
  font-family: ${({ tag, theme }) => theme.typography[tag].fontFamily};
  font-size: ${({ tag, theme }) => theme.typography[tag].fontSize}px;
  font-weight: ${({ tag, theme }) => theme.typography[tag].fontWeight};
  line-height: ${({ tag, theme }) => theme.typography[tag].lineHeight}px;
  letter-spacing: ${({ tag, theme }) => theme.typography[tag].letterSpacing}px;
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) =>
    color ? color : theme.colors.text.primary.toString()};
  margin: 0;
`;

export default Tag;
