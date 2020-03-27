import React from 'react';

export default function Spinner(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#2F73DA" d="M6 15.746A8 8 0 008 16v-2a6 6 0 116-6h2a8 8 0 10-10 7.746z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
