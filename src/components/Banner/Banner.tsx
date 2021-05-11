import { IonIcon } from '@ionic/react';
import { alert, closeCircle } from 'ionicons/icons';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils';

import { Button, Row, Spacer } from '..';

type ContainerProps = {
  color: string;
};
const Container = styled.div<ContainerProps>`
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: height 0.3s ease-in;
  padding: 8px;
`;

const Icon = styled(IonIcon)`
  font-size: 16px;
  color: white;
`;

const Text = styled.p`
  font-family: Source Sans Pro;
  color: white;

  font-size: 16px;
  margin: 0;
`;

export type Props = {
  isOpen: boolean;
  close: () => void;
  color?: string;
  icon?: 'alert';
};

const Banner: React.FC<Props> = ({
  children,
  isOpen,
  close,
  color = 'white',
  icon,
}) => {
  return isOpen ? (
    <Container color={color}>
      <Row justifyContent="center" alignItems="center" fullWidth>
        {icon && (
          <>
            <Icon color="light" icon={alert} size="medium" />
            <Spacer width={8} />
          </>
        )}
        <Text>{children}</Text>
      </Row>
      <Button variant="icon" onClick={close}>
        <Icon color="light" icon={closeCircle} size="medium" />
      </Button>
    </Container>
  ) : null;
};

export default Banner;
