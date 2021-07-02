import { createGlobalStyle } from 'styled-components';

import { typography } from '../typography';
import { ThemeTypography } from '../typography/types';

const tags = Object.keys(typography) as (keyof ThemeTypography)[];

const GlobalStyle = createGlobalStyle`
    ${({ theme }) =>
      tags.map(
        (tag) => `${tag} {
          font-family: ${theme.typography[tag].fontFamily};
          font-size: ${theme.typography[tag].fontSize}px;
          font-weight: ${theme.typography[tag].fontWeight};
          line-height: ${theme.typography[tag].lineHeight}px;
          letter-spacing: ${theme.typography[tag].letterSpacing}px;
        }`,
      )}
`;

export default GlobalStyle;
