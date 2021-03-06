import React from 'react'
import { createSvgIcon } from './base'
export const  ChevronDown = createSvgIcon(({ color }) => (
  <React.Fragment>

      <path fill={color} fillRule="evenodd" d="M12.146 6.133a.536.536 0 01.708 0 .426.426 0 010 .643l-4.5 4.09a.536.536 0 01-.708 0l-4.5-4.09a.426.426 0 010-.643.536.536 0 01.708 0L8 9.903l4.146-3.77z" clipRule="evenodd" />
      </React.Fragment>
))