import React from 'react';
import CodeBg from '../CodeBg.jsx';
import Example from '../Example.jsx';
import { UseMemoEx1str } from './UseMemoEx1str.js';
import UseMemoEx1 from './UseMemoEx1.jsx';

export default function UseReducer() {
  return (
    <div>
      <h2>Use Memo</h2>
      <p>
        We can use the <b>useMemo</b> Hook to memoize the{' '}
        <b>expensiveCalculation</b>
        function. This will cause the function to only run when needed. We can
        wrap the expensive function call with <b>useMemo</b>. The{' '}
        <b>useMemoHook</b> accepts a second parameter to declare dependencies.
        The expensive function will only run when its dependencies have changed.
      </p>
      <p>
        In the following example, the expensive function will only run when
        count is changed and not when todo's are added.
      </p>
      <h2>Example</h2>
      <Example>
        <CodeBg text={UseMemoEx1str} />
        <UseMemoEx1 />
      </Example>
    </div>
  );
}
