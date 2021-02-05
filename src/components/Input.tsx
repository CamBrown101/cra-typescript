import React, { useState, useRef } from 'react';

export const Input = () => {
  //Implied types with useState
  const [name, setName] = useState('');
  //Saying it is a string, could also do a "|" and allow it to be more then one type
  // const [name, setName] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  if (ref && ref.current) {
    console.log('ref', ref.current.value);
  }
  return (
    <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
  );
};
