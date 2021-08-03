import React from "react";
import { PROJECT_TITLE } from "../../store/actions/types";

const LogoProjectTitle = () => {
  return (
    <div>
      <svg
        className="mb-1"
        width="50"
        height="30"
        viewBox="0 0 137 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="137" height="99" rx="20" fill="#FE024E" />
      </svg>
      {PROJECT_TITLE}
    </div>
  );
};

export default LogoProjectTitle;
