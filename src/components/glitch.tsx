import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Glitch = ({ children }: Props) => {
  return (
    <div className="glitch">
      <div className="glitch__background">{children}</div>
      <div className="glitch__mask1" aria-hidden="true">{children}</div>
      <div className="glitch__mask2" aria-hidden="true">{children}</div>
    </div >);
};

export default Glitch