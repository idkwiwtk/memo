import React from "react";

const Section = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: String;
}) => {
  const _className = `w-2/4 mx-auto ${style}`;
  return <div className={_className}>{children}</div>;
};

export default Section;
