import * as React from "react";
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#F4F3F0"}
      d="M21.354 23.227V6.219L2.573 25 0 22.427 18.781 3.646H1.773V.006h21.954L24.997 0l-.003 1.531v21.696h-3.64Z"
    />
  </svg>
);
export default ArrowIcon;
