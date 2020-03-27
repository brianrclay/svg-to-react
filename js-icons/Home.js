import React from 'react';

export default function Home(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M13.5 8a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V12H7v3.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-7a.5.5 0 011 0V15h3v-3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V15h3V8.5a.5.5 0 01.5-.5zM8.341.134l7.5 7a.5.5 0 01-.682.732L8 1.184.841 7.866a.5.5 0 01-.682-.732l7.5-7a.5.5 0 01.682 0z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
