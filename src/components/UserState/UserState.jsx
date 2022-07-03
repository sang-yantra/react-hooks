import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CodeBg from '../CodeBg';
import './UserState.css';
import Example from '../Example';
import { UserStateExampleStr } from './UserStateExampleStr.js';
import UserStateExample1 from './UserStateExample1.jsx';

export default function UserState() {
  const [counter, setCounter] = useState(1);
  const [exampleComp, setExampleComp] = useState();
  // const exampleElement = renderToStaticMarkup(<UserStateExample1 />);
  return (
    <div>
      <h2>useState</h2>
      <CodeBg text={`const [state, setState] = useState(initialState);`} />
      <p>Returns a stateful value, and a function to update it.</p>
      <p>
        During the initial render, the returned state (state) is the same as the
        value passed as the first argument (initialState).
      </p>
      <p>
        The setState function is used to update the state. It accepts a new
        state value and enqueues a re-render of the component.
      </p>
      <h2>Example - 1</h2>
      {/* {exampleElement} */}
      <Example>
        <CodeBg className="example" text={UserStateExampleStr} />
        <UserStateExample1 />
      </Example>
    </div>
  );
}
