import React from 'react';

export default function Document(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <path fill="#19212C" fillRule="evenodd" d="M13.688 0C14.412 0 15 .672 15 1.5v13c0 .828-.588 1.5-1.313 1.5H2.313C1.587 16 1 15.328 1 14.5v-13C1 .672 1.588 0 2.313 0h11.374zm0 1H2.312c-.24 0-.437.224-.437.5v13c0 .276.196.5.438.5h11.374c.242 0 .438-.224.438-.5v-13c0-.276-.196-.5-.438-.5zM9.625 11c.207 0 .375.224.375.5s-.168.5-.375.5h-5.25C4.168 12 4 11.776 4 11.5s.168-.5.375-.5h5.25zM11.5 7.5a.5.5 0 010 1h-7a.5.5 0 010-1h7zm0-3.5a.5.5 0 010 1h-7a.5.5 0 010-1h7z" clipRule="evenodd" />
    </svg>
  );
}