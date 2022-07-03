import React from 'react';
import './CodeBg.css';

export default function CodeBg({ text }) {
  return (
    <pre className="codeBg">
      <code>{text}</code>
    </pre>
  );
}
