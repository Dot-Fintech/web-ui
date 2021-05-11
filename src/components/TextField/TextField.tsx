import { IonIcon } from '@ionic/react';
import { search as searchIcon } from 'ionicons/icons';
import type { InputHTMLAttributes } from 'react';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Color } from 'theme';

import { Row, Spacer } from '..';

type ContainerProps = {
  borderColor: Color;
};
const Container = styled(Row)<ContainerProps>`
  background: none;
  padding: 8px;
  outline: none;
  border: solid 2px ${({ borderColor }) => borderColor?.toString()};
  border-radius: 3px;
`;

type InputProps = {
  textColor: Color;
};
const Input = styled.input<InputProps>`
  font-family: ${({ theme }) => theme.typography.p.fontFamily};
  font-size: ${({ theme }) => theme.typography.p.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.p.fontWeight};
  line-height: ${({ theme }) => theme.typography.p.lineHeight}px;
  letter-spacing: ${({ theme }) => theme.typography.p.letterSpacing}px;
  color: ${({ textColor }) => textColor.toString()};

  border: none;
  outline: none;
  background: none;
  width: 100%;

  ::placeholder {
    color: ${({ textColor }) =>
      new Color({
        ...textColor,
        opacity: (textColor.opacity ?? 1) * 0.6,
      }).toString()};
  }

  :-webkit-autofill {
    -webkit-text-fill-color: black;
  }

  :-webkit-autofill:focus {
    -webkit-text-fill-color: black;
  }
`;

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  textColor?: Color;
  borderColor?: Color;
  search?: boolean;
  fullWidth?: boolean;
};

const TextField: React.FC<Props> = ({
  textColor,
  borderColor,
  search,
  fullWidth,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container
      alignItems="center"
      borderColor={borderColor ?? theme.colors.main.secondary}
      fullWidth={fullWidth}
    >
      {search && (
        <>
          <IonIcon icon={searchIcon} size="medium" />
          <Spacer width={4} />
        </>
      )}
      <Input {...props} textColor={textColor ?? theme.colors.text.primary} />
    </Container>
  );
};

export default TextField;
