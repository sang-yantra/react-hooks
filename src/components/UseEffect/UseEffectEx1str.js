const UseEffectEx1str = `import React, { useState, useEffect } from 'react';

export default function UseEffectEx1() {
  const [counter, setCounter] = useState(1);
  const [counterSqr, setCounterSqr] = useState(1);

  useEffect(() => {
    setCounterSqr(counterSqr * counterSqr);
  }, [counterSqr]);

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <h3>Counter * Counter : {counterSqr}</h3>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Add -1
        </button>
      </div>
    </div>
  );
}
`;

export { UseEffectEx1str };
