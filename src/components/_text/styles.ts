import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '../../theme';
import { Props } from './types';

type GetTextComponentStylesArg = Props & {
  theme: Theme;
};

export const getTextComponentStyles = ({
  textTransform,
  textAlign,
  textDecoration,
  textColor,
  theme,
}: GetTextComponentStylesArg): FlattenSimpleInterpolation => css`
  text-transform: ${textTransform};
  text-align: ${textAlign};
  text-decoration: ${textDecoration ?? 'none'};
  color: ${textColor?.toString() ?? theme.colors.text.primary.toString()};
`;
