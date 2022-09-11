import React from "react";
import CodeBg from "../CodeBg";
import Example from "../Example.jsx";
import UseReduceEx1 from "./UseReducerEx1.jsx";
import { UseReducerEx1str } from "./UseReducerEx1str.js";

export default function UseReducer() {
  return (
    <div>
      <h1>Example</h1>
      <Example>
        <CodeBg text={UseReducerEx1str} />
        <UseReduceEx1 />
      </Example>
    </div>
  );
}
