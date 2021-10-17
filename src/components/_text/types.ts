import { Color } from '../../theme';

type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
type TextAlignOption = 'left' | 'right' | 'center' | 'justify';
type TextDecorationOption = 'underline' | 'none';

export type Props = {
  textColor?: Color;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
  textDecoration?: TextDecorationOption;
};
