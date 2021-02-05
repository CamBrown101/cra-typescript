import React from 'react';

type Props = {
  //Method returns a string
  // onClick(): string;
  //Method returns nothing
  // onClick(): void;
  // Method with params
  // onClick(text: string): void;
  onClick: (text: string) => void;
};

export const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick('hi')}>Click Me</button>;
};
