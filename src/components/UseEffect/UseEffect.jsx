import React from 'react';
import Example from '../Example.jsx';
import { UseEffectEx1str } from './UseEffectEx1str.js';
import CodeBg from '../CodeBg.jsx';
import UseEffectEx1 from './UseEffectEx1.jsx';
import UseEffectEx2 from './UseEffectEx2.jsx';
import { UseEffectEx2str } from './UseEffectEx2str.js';

export default function UseEffect() {
  return (
    <div>
      <h2>useEffect</h2>
      <h4>Example - 1</h4>
      <Example>
        <CodeBg text={UseEffectEx1str} />
        <UseEffectEx1 />
      </Example>
      <hr />
      <h4>Example - 2</h4>
      <Example>
        <CodeBg text={UseEffectEx2str} />
        <UseEffectEx2 />
      </Example>
    </div>
  );
}
