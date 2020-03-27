import React from 'react';

export default function Calculator(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <path fill="#121417" fillRule="evenodd" d="M2.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-11zM1 1.5A1.5 1.5 0 012.5 0h11A1.5 1.5 0 0115 1.5v13a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5v-13z" clipRule="evenodd" />
      <path fill="#121417" fillRule="evenodd" d="M3 2.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-3zM4 3v2h8V3H4zM3 7.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2zM4 8v1h3V8H4zM3 11.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2zm1 .5v1h3v-1H4zM9 7.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-6zm1 .5v5h2V8h-2z" clipRule="evenodd" />
    </svg>
  );
}
