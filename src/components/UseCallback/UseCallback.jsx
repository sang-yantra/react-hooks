import React from "react";
import CodeBg from "../CodeBg.tsx";
import Example from "../Example.jsx";
import { UseCallbackEx1str } from "./UseCallbackEx1str.js";
import UseCallbackEx1 from "./UseCallbackEx1.jsx";

export default function UseReducer() {
  return (
    <div>
      <h2>Use Callback</h2>
      <p>
        We can use the <b>useCallback</b> hook to prevent the function from
        being recreated unless necessary. Use the <b>useCallback</b> Hook to
        prevent the Todos component from re-rendering needlessly:
      </p>
      <h2>Example</h2>
      <Example>
        <CodeBg text={UseCallbackEx1str} />
        <UseCallbackEx1 />
      </Example>
    </div>
  );
}
