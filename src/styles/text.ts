import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme, ThemeTypography } from '../theme';

type GetTextStylesArg = {
  tag: keyof ThemeTypography;
  theme: Theme;
};

export const getTextStyles = ({
  tag,
  theme,
}: GetTextStylesArg): FlattenSimpleInterpolation => css`
  font-family: ${theme.typography[tag].fontFamily};
  font-size: ${theme.typography[tag].fontSize}px;
  font-weight: ${theme.typography[tag].fontWeight};
  line-height: ${theme.typography[tag].lineHeight}px;
  letter-spacing: ${theme.typography[tag].letterSpacing}px;
`;
