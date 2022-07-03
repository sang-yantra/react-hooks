import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export default function UseContextEx1() {
  const user = 'ANUP MAHATO';

  return (
    <UserContext.Provider value={user}>
      <h1>Component 1 </h1>
      <h4>Hello {user}</h4>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h4>{`Hello ${user} again!`}</h4>
    </>
  );
}
