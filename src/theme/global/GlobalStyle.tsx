import { createGlobalStyle, css } from 'styled-components';

import { getTextStyles } from '../../styles/text';
import { ThemeTypography } from '../typography/types';

const GlobalStyle = createGlobalStyle`
    ${({ theme }) =>
      (Object.keys(theme.typography) as (keyof ThemeTypography)[]).map(
        (tag) => css`
          ${tag} {
            ${getTextStyles({ tag, theme })}
          }
        `,
      )}
`;

export default GlobalStyle;
