import { createGlobalStyle } from 'styled-components';

import { ThemeTypography } from '../typography/types';

const GlobalStyle = createGlobalStyle`
    ${({ theme }) =>
      (Object.keys(theme.typography) as (keyof ThemeTypography)[]).map(
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
