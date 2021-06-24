import { ThemeTypography } from './theme/typography/types';

export type AlignmentValue =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type TypographyTag = keyof ThemeTypography;
