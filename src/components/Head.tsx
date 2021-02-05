import React from 'react';

//Sets types for props. Props word can be anything
//Title is required and isActive is optional
//By default params are required

// type User = {
//   name: string;
// };

type Props = {
  title: string; //Required
  isActive?: boolean; //Optional
  //   thing: number;
  //   thing2: string[];
  //   status: 'loading' | 'loaded';
  //   thing3: {};
  //   thing4: {
  //     name: string;
  //   };
  //   func: () => void;
  //   user: User;
};

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
