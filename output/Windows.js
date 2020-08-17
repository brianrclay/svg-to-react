import React from 'react'
import { createSvgIcon } from './base'

export const Windows = createSvgIcon(({ color }) => (
   <React.Fragment> 
  
      <g clipPath="url(#clip0)">
        <path fill={color} fillRule="evenodd" d="M15.3.003a.355.355 0 01.274.081.353.353 0 01.129.256v6.905c0 .188-.177.336-.365.336h-6.84c-.189 0-.37-.148-.37-.336v-5.99c0-.17.144-.314.313-.337l6.858-.915zM8.808 6.9h6.213V.729l-6.213.825V6.9zM7.134 8.284c.102-.007.163.036.227.1s.086.15.086.24v5.94c0 .098-.026.19-.1.256a.302.302 0 01-.249.082l-6.43-.82a.33.33 0 01-.285-.337V8.638c0-.188.14-.34.328-.34l6.423-.014zm-6.07 5.16l5.702.734V8.966l-5.702.012v4.467zM15.35 8.285l-6.852-.023a.388.388 0 00-.37.367v6.105c0 .17.14.315.31.338l6.848.925a.377.377 0 00.287-.081.354.354 0 00.13-.256V8.638a.362.362 0 00-.352-.353zm-.328 6.985l-6.213-.833V8.969l6.213.01v6.29zM7.092 1.085a.31.31 0 01.254.082.328.328 0 01.101.255v5.823c0 .188-.124.336-.312.336H.667c-.188 0-.369-.148-.369-.336v-4.99c0-.171.142-.316.311-.338l6.483-.832zM.979 6.9h5.787V1.81L.98 2.554v4.347z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    
   </React.Fragment> 
))

Windows.displayName = "Windows"
