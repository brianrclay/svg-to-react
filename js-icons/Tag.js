import React from 'react';

export default function Tag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M3.598.01l5 1a.5.5 0 01.256.136l7 7a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 01-.136-.256l-1-5a.5.5 0 01.136-.452l3-3A.5.5 0 013.598.01zm.066 1.033L1.043 3.664l.918 4.59L8.5 14.793 14.793 8.5l-6.54-6.54-4.589-.917zM5 4a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
