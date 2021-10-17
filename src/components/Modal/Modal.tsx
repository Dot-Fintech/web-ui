import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import type { CSSProperties } from 'react';
import React from 'react';
import ReactModal from 'react-modal';
import styled, { useTheme } from 'styled-components';

import { breakpoints } from '../../utils';
import Button from '../Button';

const MOBILE_STYLES: CSSProperties = {
  position: 'relative',
  inset: 'auto',
  left: 0,
  top: 0,
  border: 'none',
  background: 'none',
  padding: 0,
  borderRadius: 0,
  width: '100vw',
  height: '100vh',
};

const CloseButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export type Props = {
  isOpen: boolean;
  close: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, close, children }) => {
  const theme = useTheme();

  const isMobile = window ? window.innerWidth < breakpoints.sm : false;

  return (
    <ReactModal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        content: {
          ...(isMobile ? MOBILE_STYLES : {}),
          backgroundColor: theme.colors.background.primary.toString(),
        },
      }}
    >
      <CloseButton onClick={close}>
        <IonIcon
          icon={closeCircle}
          color={theme.name === 'light' ? 'dark' : 'light'}
          size="large"
        />
      </CloseButton>
      {children}
    </ReactModal>
  );
};

export default Modal;
