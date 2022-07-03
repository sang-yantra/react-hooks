const UseRefEx2str = `
import React, { useRef } from 'react';

export default function UseRefEx2() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
`;

export { UseRefEx2str };
