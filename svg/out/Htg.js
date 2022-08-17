import * as React from 'react';

function SvgHtg(props) {
  return (
    <svg width={56} height={56} fill="none" viewBox="0 0 56 56" {...props}>
      <circle cx={28} cy={28} r={28} fill="#242A35" />
      <path
        fill="#fff"
        d="M30.6667 20V13H21.5C20.1193 13 19 14.1752 19 15.625V38.375C19 39.8242 20.1193 41 21.5 41H36.5C37.8807 41 39 39.8248 39 38.375V21.75H32.3802C31.4115 21.75 30.6667 20.968 30.6667 20ZM27.026 32.3484C27.4329 32.7757 27.4329 33.4695 27.026 33.8966C26.8229 34.1148 26.5573 34.2188 26.2917 34.2188C26.026 34.2188 25.7589 34.1128 25.5552 33.8992L23.0552 31.2742C22.6483 30.8469 22.6483 30.1531 23.0552 29.726L25.5552 27.101C25.9621 26.6737 26.6214 26.6737 27.0281 27.101C27.4349 27.5282 27.435 28.222 27.0281 28.6492L25.2656 30.5L27.026 32.3484ZM34.9427 29.7234C35.3496 30.1507 35.3496 30.8445 34.9427 31.2716L32.4427 33.8966C32.2396 34.1148 31.974 34.2188 31.7083 34.2188C31.4427 34.2188 31.1755 34.1128 30.9719 33.8992C30.565 33.4719 30.565 32.7781 30.9719 32.351L32.7344 30.5L30.9708 28.6494C30.564 28.2222 30.564 27.5283 30.9708 27.1012C31.3777 26.6741 32.037 26.674 32.4437 27.1012L34.9427 29.7234ZM32.3333 13V20H39L32.3333 13Z"
      />
    </svg>
  );
}

export default SvgHtg;
