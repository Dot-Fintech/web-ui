import type { ButtonHTMLAttributes } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import { Color } from '../../theme';
import { Colors } from '../../utils';
import { getLinerGradientColors } from './utils';

const MIN_HEIGHT = 40;

type ContainerProps = {
  variant?: 'primary' | 'secondary';
  lean?: boolean;
  width?: number;
  height?: number;
  fullWidth?: boolean;
};
const Container = styled.button<ContainerProps>`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';

  ${({ width, fullWidth }) =>
    fullWidth ? 'width: 100%;' : width ? `width: ${width}px;` : ''}
  ${({ height }) => (height ? `height: ${height}px;` : '')}
  min-width: 64px;
  min-height: ${MIN_HEIGHT}px;

  border-radius: ${({ height }) => (height ? height / 2 : MIN_HEIGHT / 2)}px;
  padding: ${({ lean }) => (lean ? 0 : '8px')};
  border: none;
  cursor: pointer;

  ${({ lean, theme }) =>
    !lean
      ? css`
          box-shadow: 0px 4px 4px
            ${new Color({
              ...theme.colors.text.primary,
              opacity: 0.1,
            }).toString()};
        `
      : null}

  ${({ color, lean, variant, theme }) => {
    const { first, second } = getLinerGradientColors(theme);
    return color || lean || variant === 'secondary'
      ? css`
          background-color: ${color ?? variant === 'secondary'
            ? theme.colors.background.primary.toString()
            : Colors.transparent.toString()};
          :disabled {
            background-color: ${color ?? variant === 'secondary'
              ? theme.colors.background.primary.toString()
              : Colors.transparent.toString()};
          }
        `
      : css`
          background: linear-gradient(
            90deg,
            ${first.toString()} 0%,
            ${second.toString()} 100%
          );
          :disabled {
            background: linear-gradient(
              90deg,
              ${first.toString()} 0%,
              ${second.toString()} 100%
            );
          }
        `;
  }}
`;

type TextProps = { disabled?: boolean; variant?: 'primary' | 'secondary' };
const Text = styled.p<TextProps>`
  font-family: Source Sans Pro;
  color: ${({ disabled, variant, theme }) =>
    disabled
      ? new Color({ ...Colors.white, opacity: 0.5 }).toString()
      : variant === 'secondary'
      ? theme.colors.text.primary.toString()
      : Colors.white.toString()};
  font-size: 14px;
  margin: 0;
`;

export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  ContainerProps & {
    color?: Color;
  };

const Button: React.FC<Props> = ({ children, color, ...props }) => {
  return (
    <Container
      {...props}
      color={color?.toString()}
      lean={typeof children !== 'string'}
    >
      {typeof children === 'string' ? (
        <Text disabled={props.disabled} variant={props.variant}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
