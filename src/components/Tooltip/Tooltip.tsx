import AtlaskitTooltip from '@atlaskit/tooltip';
import { IonIcon } from '@ionic/react';
import { helpCircle } from 'ionicons/icons';
import React from 'react';
import styled, { useTheme } from 'styled-components';

import InlineDialog from './InlineDialog';

const Icon = styled(IonIcon)`
  font-size: 24px;
`;

type Props = {
  content: string;
  position: 'mouse' | 'top' | 'right' | 'bottom' | 'left';
};

const Tooltip: React.FC<Props> = ({ content, position }) => {
  const theme = useTheme();

  return (
    <AtlaskitTooltip
      component={InlineDialog}
      content={content}
      position={position}
    >
      <Icon
        icon={helpCircle}
        color={theme.name === 'light' ? 'dark' : 'light'}
      />
    </AtlaskitTooltip>
  );
};

export default Tooltip;
