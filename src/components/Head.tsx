import React from 'react';

//Sets types for props. Props word can be anything
type Props = {
  title: string;
  isActive: boolean;
};

export const Head = ({ title = 'Hello', isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
