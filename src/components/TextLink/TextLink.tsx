import type { AnchorHTMLAttributes } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import type { TypographyTag } from '../../types';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tag: TypographyTag;
  /** target of the link */
  to: string;
};

const TextLink: React.FC<Props> = ({ tag, to, children, ...props }) => {
  const theme = useTheme();

  return (
    <Link
      {...props}
      style={{
        ...theme.typography[tag],
        lineHeight: `${theme.typography[tag].lineHeight}px`,
      }}
      color={theme.colors.textLink.primary.toString()}
      to={to}
    >
      {children}
    </Link>
  );
};

export default TextLink;
