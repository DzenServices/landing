import * as React from "react";

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    width="48"
    height="48"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="120" cy="120" r="120" fill="currentColor" opacity="0.12" />
    <path
      fill="currentColor"
      d="M196.4 54.2c3.3-1.3 6.3 1.9 5.2 5.2l-29.7 93.7c-0.9 2.9-4.1 4.3-6.8 3.1l-35.6-15.6-18.8 19.2c-1.9 2-5.3 1.2-6.2-1.5l-9.5-29.5-31.9-13.6c-3.1-1.3-3.1-5.7 0-7l130.3-54zM150.1 86.7l-60.1 38.5 9.2 28.5 11.1-11.3c1.2-1.2 3.1-1.6 4.7-0.9l28.4 12.5 6.7-21.1-26.9-11.8 27-34.4z"
    />
  </svg>
);

export default TelegramIcon;
