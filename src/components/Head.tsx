import React from 'react';

//Sets types for props. Props word can be anything
//Title is required and isActive is optional
//By default params are required
type Props = {
  title: string; //Required
  isActive?: boolean; //Optional
};

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
