import React, { useState } from 'react';

export const Input = () => {
  //Implied types with useState
  const [name, setName] = useState('');
  //Saying it is a string, could also do a "|" and allow it to be more then one type
  // const [name, setName] = useState<string>('');
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
};
