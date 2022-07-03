import React, { useState, createContext, useContext } from 'react';
import Example from '../Example.jsx';
import CodeBg from '../CodeBg.jsx';
import { UseContextEx1str } from './UseContextEx1str.js';
import UseContextEx1 from './UseContextEx1.jsx';
const UserContext = createContext();

export default function UseContext() {
  const user = 'ANUP MAHATO';

  return (
    <UserContext.Provider value={user}>
      <h1>Example -1 </h1>
      <Example>
        <CodeBg text={UseContextEx1str} />
        <UseContextEx1 />
      </Example>
    </UserContext.Provider>
  );
}
