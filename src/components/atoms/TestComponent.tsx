import React from "react";

interface ITestComponentProps {
  error: Boolean;
  style?: String;
  children?: React.ReactNode; // This is the type of children
}

const TestComponent = ({ error, style, children }: ITestComponentProps) => {
  const className = `
    w-32 h-32
    ${error ? "bg-red-500" : "bg-white"}
    ${style}
  `;
  return <div className={className}>{children}</div>;
};

export default TestComponent;
