import React from 'react';

export default function Receipt(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M13.5 0A1.5 1.5 0 0115 1.5v14a.5.5 0 01-.813.39l-2.15-1.72-1.684 1.683a.5.5 0 01-.707 0L8 14.206l-1.647 1.647a.5.5 0 01-.707 0l-1.683-1.684-2.15 1.72A.5.5 0 011 15.5v-14A1.5 1.5 0 012.5 0h11zm0 1h-11a.5.5 0 00-.5.5v12.959l1.687-1.35a.5.5 0 01.666.037L6 14.792l1.646-1.646a.5.5 0 01.707 0L10 14.792l1.647-1.646a.5.5 0 01.666-.037l1.687 1.35V1.499a.5.5 0 00-.5-.5zm-2 8a.5.5 0 010 1h-7a.5.5 0 010-1h7zm0-4a.5.5 0 010 1h-7a.5.5 0 010-1h7z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
