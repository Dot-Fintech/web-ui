import styled from 'styled-components';

const Divider = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.colors.background.secondary.toString()};
  margin: 0;
  border: none;
`;

export default Divider;
