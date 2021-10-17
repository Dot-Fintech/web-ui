import styled, { css } from 'styled-components';

import { getTextComponentStyles } from '../styles';
import { Props } from '../types';

const TAG = 'p';

const Anchor = styled.a<Props>`
  ${(props) => css`
    font-family: ${props.theme.typography[TAG].fontFamily};
    font-size: ${props.theme.typography[TAG].fontSize}px;
    font-weight: ${props.theme.typography[TAG].fontWeight};
    line-height: ${props.theme.typography[TAG].lineHeight}px;
    letter-spacing: ${props.theme.typography[TAG].letterSpacing}px;

    ${getTextComponentStyles(props)}
  `}
`;

export default Anchor;
