import React from 'react';

export default function Filter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#19212C" fillRule="evenodd" d="M1.5 1.933l5.4 6.72c.066.081.1.18.1.28v5.134h2V8.933c0-.1.036-.199.1-.28l5.4-6.72h-13zM6 9.09L.1 1.747C-.145 1.439.09 1 .5 1h15c.413 0 .648.439.4.747L10 9.089v5.444c0 .258-.223.467-.5.467h-3c-.275 0-.5-.209-.5-.467V9.09z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
