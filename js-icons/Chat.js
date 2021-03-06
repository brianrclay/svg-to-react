import React from 'react';

export default function Chat(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M14.5 4A1.5 1.5 0 0116 5.5v6a1.5 1.5 0 01-1.5 1.5H13v2.5a.5.5 0 01-.854.354L9.293 13H6.5a.5.5 0 010-1h3a.5.5 0 01.354.146L12 14.293V12.5a.5.5 0 01.5-.5h2a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1zm-4-4A1.5 1.5 0 0112 1.5v6A1.5 1.5 0 0110.5 9H6.707l-2.853 2.854A.5.5 0 013 11.5V9H1.5A1.5 1.5 0 010 7.5v-6A1.5 1.5 0 011.5 0h9zm0 1h-9a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h2a.5.5 0 01.5.5v1.793l2.146-2.147A.5.5 0 016.5 8h4a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
