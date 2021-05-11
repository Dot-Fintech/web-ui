import React from 'react';
import styled from 'styled-components';
import { Color } from 'theme';

const SIZE = 20;

type ContainerProps = {
  isChecked: boolean;
};
const Container = styled.button<ContainerProps>`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  height: ${SIZE}px;
  width: ${SIZE}px;

  position: relative;

  background-color: ${({ isChecked, theme }) =>
    isChecked
      ? theme.colors.main.secondary.toString()
      : theme.colors.background.secondary.toString()};

  :hover {
    background-color: ${({ isChecked, theme }) =>
      isChecked
        ? theme.colors.main.secondary.toString()
        : new Color({
            ...theme.colors.background.secondary,
            opacity: 0.5,
          }).toString()};
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 4px;
  left: 7px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
`;

export type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
};

const Checkbox: React.FC<Props> = ({ value, setValue }) => {
  const handleClick = () => {
    setValue(!value);
  };

  return (
    <Container isChecked={value} onClick={handleClick}>
      {value && <Checkmark />}
    </Container>
  );
};

export default Checkbox;
