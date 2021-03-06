import React from 'react';

export default function Chart(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <path fill="#19212C" fillRule="evenodd" d="M14.5 0A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13A1.5 1.5 0 011.5 0h13zm0 1h-13a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5zm-1.7 4.1a.5.5 0 01.1.7l-3 4a.5.5 0 01-.754.054L6.554 7.26 3.9 10.8a.5.5 0 01-.8-.6l3-4a.5.5 0 01.754-.054L9.446 8.74 12.1 5.2a.5.5 0 01.7-.1z" clipRule="evenodd" />
    </svg>
  );
}
