import React from "react";
import "./CodeBg.css";

const CodeBg: React.FC<{ className?: string; text: string }> = ({ text }) => {
  return (
    <pre className="codeBg">
      <code>{text}</code>
    </pre>
  );
};

export default CodeBg;
