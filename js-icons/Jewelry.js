import React from 'react';

export default function Jewelry(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M8 4a6 6 0 110 12A6 6 0 018 4zm0 1a5 5 0 100 10A5 5 0 008 5zm1.5-5a.5.5 0 01.354.146l1 1a.5.5 0 010 .708l-1 1a.5.5 0 11-.708-.708l.647-.646-.5-.5H6.707l-.5.5.647.646a.5.5 0 11-.708.708l-1-1a.5.5 0 010-.708l1-1A.5.5 0 016.5 0h3z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
