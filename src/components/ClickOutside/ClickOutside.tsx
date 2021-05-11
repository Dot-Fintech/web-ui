import React, { HTMLAttributes, useEffect, useRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  onClickOutside?: (event?: Event) => void;
};

const ClickOutside: React.FC<Props> = ({ onClickOutside, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleEvent = (event?: MouseEvent) => {
    if (
      onClickOutside &&
      ref.current &&
      event &&
      !ref.current.contains(event.target as HTMLElement)
    ) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    if (onClickOutside) {
      document.addEventListener('click', handleEvent, true);
    }
    return () => {
      document.removeEventListener('click', handleEvent, true);
    };
  });

  return <div {...props} ref={ref} />;
};

export default ClickOutside;
