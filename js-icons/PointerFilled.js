import React from 'react';

export default function PointerFilled(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <path fill="#121417" d="M9 6V1.5a1.5 1.5 0 10-3 0v7.713a1 1 0 01-1.523.853l-1.43-.878a1.415 1.415 0 00-1.729 2.215L5.915 16h8.728l1.141-6.42a2.182 2.182 0 00-1.699-2.466L9 6z" />
    </svg>
  );
}