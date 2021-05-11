import React from 'react';

import type { Color } from '../../theme';
import type { TypographyTag } from '../../types';
import type { TextAlignOption, TextTransformOption } from './Tag';
import Tag from './Tag';

export type Props = {
  tag: TypographyTag;
  color?: Color;
  italic?: boolean;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Typography: React.FC<Props> = ({
  tag,
  color,
  italic,
  children,
  ...props
}) => {
  const Wrapper = italic ? 'i' : 'span';

  return (
    <Wrapper>
      <Tag {...props} tag={tag} color={color?.toString()} as={tag}>
        {children}
      </Tag>
    </Wrapper>
  );
};

export default Typography;
