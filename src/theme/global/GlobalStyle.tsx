import { createGlobalStyle } from 'styled-components';

import { ThemeTypography } from '../typography/types';

const tags: (keyof ThemeTypography)[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'];

const GlobalStyle = createGlobalStyle`
    ${({ theme }) =>
      tags.map(
        (tag) => `${tag} {
          font-family: ${theme.typography[tag].fontFamily};
          font-size: ${theme.typography[tag].fontFamily};
          font-weight: ${theme.typography[tag].fontFamily};
          line-height: ${theme.typography[tag].fontFamily};
          letter-spacing: ${theme.typography[tag].fontFamily};
        }`,
      )}
`;

export default GlobalStyle;
