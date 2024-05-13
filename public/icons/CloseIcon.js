import * as React from "react";
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={66}
    fill="none"
    {...props}
  >
    <g stroke="#110F0E" strokeWidth={2}>
      <circle cx={32.5} cy={33} r={31.5} />
      <path d="m20.707 21.293 25.456 25.456M19.293 47.293l25.456-25.456" />
    </g>
  </svg>
);
export default CloseIcon;
