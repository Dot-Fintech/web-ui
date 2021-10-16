import React from 'react';

type Props = {
  size: number;
};

const Logo: React.FC<Props> = ({ size }) => {
  const radius = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        transform={`rotate(-45 ${radius} ${radius})`}
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={radius}
          y1={0.147790055 * size}
          x2={radius}
          y2={0.854972376 * size}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D2D3" />
          <stop offset="1" stopColor="#1289A7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
