import styled from 'styled-components';

import { getTextComponentStyles } from '../styles';
import { Props } from '../types';

const Typography = styled.span<Props>`
  ${(props) => getTextComponentStyles(props)}
  margin: 0;
`;

export default Typography;
