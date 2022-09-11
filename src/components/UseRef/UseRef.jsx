import React from "react";
import CodeBg from "../CodeBg";
import Example from "../Example.jsx";
import { UseRefEx1str } from "./UseRefEx1str.js";
import { UseRefEx2str } from "./UseRefEx2str.js";
import UseRefEx1 from "./UseRefEx1.jsx";
import UseRefEx2 from "../UseRef/UseRefEx2.jsx";
import { UseRefEx3str } from "../UseRef/UseRefEx3str.js";
import UseRefEx3 from "../UseRef/UseRefEx3.jsx";

export default function UseReducer() {
  return (
    <div>
      <h2>UseRef</h2>
      <p>
        The <b>useRef</b> Hook allows you to persist values between renders.
      </p>
      <p>
        It can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly. Does Not
        Cause
      </p>
      <p>
        Re-renders If we tried to count how many times our application renders
        using the useState Hook, we would be caught in an infinite loop since
        this Hook itself causes a re-render. To avoid this, we can use the
        useRef Hook.
      </p>
      <h2>Example</h2>
      <Example>
        <CodeBg text={UseRefEx1str} />
        <UseRefEx1 />
      </Example>
      <hr />
      <h3>Example - 2</h3>
      <p>
        <b>Accessing DOM Elements</b>
      </p>
      <p>
        In general, we want to let React handle all DOM manipulation. But there
        are some instances where useRef can be used without causing issues. In
        React, we can add a ref attribute to an element to access it directly in
        the DOM.
      </p>
      <Example>
        <CodeBg text={UseRefEx2str} />
        <UseRefEx2 />
      </Example>
      <hr />
      <h3>Example - 3</h3>
      <p>
        <b>Tracking State Changes</b>
      </p>
      <p>
        The useRef Hook can also be used to keep track of previous state values.
        This is because we are able to persist useRef values between renders.
      </p>
      <Example>
        <CodeBg text={UseRefEx3str} />
        <UseRefEx3 />
      </Example>
    </div>
  );
}
