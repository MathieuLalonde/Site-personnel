import type * as React from 'react';
import { useEffect, useState } from 'react';

// from: https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components

interface Props {
  children: React.ReactNode
  waitBeforeShow?: number
}

function Delayed({ children, waitBeforeShow = 500 }: Props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
}

export default Delayed;
