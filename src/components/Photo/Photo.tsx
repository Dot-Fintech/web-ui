import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  size: number;
  circular?: boolean;
};
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  border-radius: ${({ circular, size }) =>
    circular ? `${size / 2}px` : 'none'};
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.colors.background.primary.toString()};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = WrapperProps & {
  url: string;
};

const Photo: React.FC<Props> = ({ circular, size, url }) => {
  return (
    <Wrapper size={size} circular={circular}>
      <Image src={url} />
    </Wrapper>
  );
};

export default Photo;
