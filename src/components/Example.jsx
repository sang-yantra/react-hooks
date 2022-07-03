import React, { useState } from 'react';
import './Example.css';
export default function Examle(props) {
  const [counter, setCounter] = useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">{props.children[0]}</div>
        <div className="col-sm-6">{props.children[1]}</div>
      </div>
    </div>
  );
}
