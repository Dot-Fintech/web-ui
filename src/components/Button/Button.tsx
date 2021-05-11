import type { ButtonHTMLAttributes } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Color } from 'theme';
import { Colors } from 'utils';

type ContainerProps = {
  variant?: 'text' | 'icon';
  width?: number;
  height?: number;
};
const Container = styled.button<ContainerProps>`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';

  min-width: ${({ variant }) => (variant === 'icon' ? 'none' : '64px')};
  min-height: ${({ variant }) => (variant === 'icon' ? 'none' : '40px')};
  ${({ width }) => (width ? `width: ${width}px;` : '')}
  ${({ height }) => (height ? `height: ${height}px;` : '')}

  border-radius: 3px;
  border: none;
  padding: ${({ variant }) => (variant === 'icon' ? 0 : '8px')};
  cursor: pointer;

  background-color: ${({ color, variant, theme }) =>
    color ??
    (variant === 'icon'
      ? Colors.transparent.toString()
      : theme.colors.main.secondary.toString())};

  :disabled {
    background-color: ${({ color, variant, theme }) =>
      color ??
      (variant === 'icon'
        ? Colors.transparent.toString()
        : theme.colors.main.secondary.toString())};
  }
`;

type TextProps = {
  disabled?: boolean;
};
const Text = styled.p<TextProps>`
  font-family: Source Sans Pro;
  color: ${({ disabled }) =>
    disabled
      ? new Color({ ...Colors.white, opacity: 0.5 }).toString()
      : Colors.white.toString()};

  font-size: 18px;
  margin: 0;
`;

export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  variant?: 'text' | 'icon';
  width?: number;
  height?: number;
  color?: Color;
};

const Button: React.FC<Props> = ({
  children,
  color,
  variant = 'text',
  ...props
}) => {
  return (
    <Container {...props} color={color?.toString()} variant={variant}>
      {variant === 'text' ? (
        <Text disabled={props.disabled}>{children}</Text>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
