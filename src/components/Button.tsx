import React from 'react';

type Props = {
  //typing Dom events
  onClick: (e: React.MouseEvent) => void;
};

export const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Click Me</button>;
};
