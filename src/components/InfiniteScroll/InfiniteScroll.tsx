import Spinner from '@atlaskit/spinner';
import React from 'react';
import ReactInfiniteScroll from 'react-infinite-scroll-component';
import styled, { useTheme } from 'styled-components';

import Row from '../Row';

const SpinnerWrapper = styled(Row)`
  padding-bottom: 4px;
`;

type Props = {
  dataLength: number;
  hasMore: boolean;
  scrollableTarget?: string;
  next: () => void;
  refresh: () => void;
};

const InfiniteScroll: React.FC<Props> = ({
  dataLength,
  hasMore,
  scrollableTarget,
  next,
  refresh,
  children,
}) => {
  const theme = useTheme();

  return (
    <ReactInfiniteScroll
      scrollableTarget={scrollableTarget}
      next={next}
      dataLength={dataLength}
      hasMore={hasMore}
      loader={null}
      pullDownToRefresh
      refreshFunction={refresh}
      pullDownToRefreshContent={
        <SpinnerWrapper justifyContent="center" fullWidth>
          <Spinner
            size="medium"
            appearance={theme.name === 'light' ? 'inherit' : 'invert'}
          />
        </SpinnerWrapper>
      }
    >
      {children}
    </ReactInfiniteScroll>
  );
};

export default InfiniteScroll;
