import React from 'react';

export default function Favorite(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#121417" fillRule="evenodd" d="M8 .367a.5.5 0 01.448.279l2.202 4.46 4.922.715a.5.5 0 01.277.853l-3.562 3.472.84 4.902a.5.5 0 01-.725.528L8 13.26l-4.402 2.315a.5.5 0 01-.726-.527l.84-4.903L.152 6.674a.5.5 0 01.277-.853l4.922-.715L7.552.646A.5.5 0 018 .367zm0 1.63L6.13 5.784a.5.5 0 01-.376.274l-4.18.607L4.6 9.613a.5.5 0 01.144.443l-.714 4.163 3.738-1.966a.5.5 0 01.466 0l3.738 1.966-.714-4.163a.5.5 0 01.144-.443l3.024-2.948-4.179-.607a.5.5 0 01-.376-.274L8 1.997z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
