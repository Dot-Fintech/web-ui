import { Color } from '../../theme';

type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
type TextAlignOption = 'left' | 'right' | 'center' | 'justify';

export type Props = {
  textColor?: Color;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};
