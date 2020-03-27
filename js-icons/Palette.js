import React from 'react';

export default function Palette(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0)">
        <path fill="#121417" fillRule="evenodd" d="M4.923.5c.51-.015 1.093.125 1.458.6.503.65.274 1.412.14 1.864l-.003.008-.027.087c-.066.222-.116.386-.134.534-.018.142.004.196.023.224.197.236.439.316.834.28.39-.037.84-.178 1.409-.356l.235-.073c1.305-.405 3.024-.878 4.883.004l.008.004c1.39.689 1.969 1.938 2.164 3.106.194 1.157.025 2.292-.128 2.902a8.035 8.035 0 01-7.74 5.816A7.966 7.966 0 013.414.99l.007-.006c.434-.29.982-.467 1.501-.483zm-.942 1.314A6.966 6.966 0 008.036 14.5h.007a7.036 7.036 0 006.774-5.068c.13-.526.273-1.51.11-2.486-.162-.969-.611-1.872-1.618-2.372-1.481-.701-2.861-.353-4.155.049l-.23.072c-.55.173-1.114.35-1.618.397-.618.057-1.236-.073-1.708-.652a.488.488 0 01-.012-.014c-.237-.315-.257-.667-.222-.955.03-.24.107-.495.17-.703l.026-.083c.157-.527.18-.779.03-.974l-.002-.001c-.092-.12-.294-.22-.633-.21-.33.01-.694.128-.974.314z" clipRule="evenodd" />
        <path fill="#121417" fillRule="evenodd" d="M10.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" clipRule="evenodd" />
        <path fill="#121417" d="M4 9a1 1 0 100-2 1 1 0 000 2zM6 12a1 1 0 100-2 1 1 0 000 2z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}