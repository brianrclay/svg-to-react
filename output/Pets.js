import React from 'react'
import { createSvgIcon } from './base'

export const Pets = createSvgIcon(({ color }) => (
   <React.Fragment> 
  
      <g clipPath="url(#clip0)">
        <path fill={color} fillRule="evenodd" d="M8.006 6.246c1.395.019 2.679.731 3.389 1.882l.012.02 1.204 2.184a3.159 3.159 0 01-.472 3.73c-.819.898-2.15 1.186-3.31.703a2.007 2.007 0 00-1.684.008c-1.141.475-2.473.187-3.285-.705a3.161 3.161 0 01-.478-3.734l1.204-2.177.018-.03c.71-1.15 1.994-1.862 3.402-1.88zm0 .956c-1.047.013-2.01.549-2.541 1.408l-.007.01-1.197 2.163a2.24 2.24 0 00.344 2.65c.533.586 1.4.773 2.126.472a3.02 3.02 0 012.514-.008 1.92 1.92 0 002.149-.47c.684-.724.82-1.783.336-2.646l-1.199-2.176a3.025 3.025 0 00-2.525-1.403zM3.5 6.58c.396.925-.04 1.99-.995 2.408l-.124.036C1.346 9.193.362 8.55.144 7.572c-.393-.924.043-1.988.997-2.406l.128-.037c1.03-.16 2.006.481 2.23 1.452zm11.237-1.452l.129.038c.951.42 1.384 1.483.99 2.406-.218.976-1.202 1.62-2.236 1.452l-.125-.037c-.953-.42-1.385-1.484-.988-2.408.223-.97 1.2-1.61 2.23-1.45zm-13.241.935a.897.897 0 00-.416 1.174l.034.107c.09.472.544.794 1.036.747a.896.896 0 00.416-1.174l-.034-.104c-.094-.472-.545-.793-1.036-.75zm11.978.75l-.034.105a.895.895 0 00.412 1.173c.491.047.945-.275 1.035-.747l.035-.108a.897.897 0 00-.412-1.173c-.491-.042-.942.279-1.036.75zM5.262 1c1.285.082 2.268 1.124 2.232 2.352a2.212 2.212 0 01-.455 1.675 2.404 2.404 0 01-1.6.895h-.124c-1.253-.145-2.18-1.186-2.128-2.306-.194-1.234.672-2.391 1.954-2.61L5.261 1zm5.476 0l.12.006c1.282.219 2.149 1.376 1.96 2.521.047 1.209-.881 2.25-2.134 2.395h-.124a2.404 2.404 0 01-1.6-.895 2.212 2.212 0 01-.454-1.675c-.037-1.228.946-2.27 2.232-2.352zm-5.482.958c-.717.153-1.194.816-1.079 1.605-.026.692.49 1.29 1.196 1.402.346-.058.657-.24.869-.511.224-.287.318-.648.26-1.002l-.006-.098c.037-.71-.51-1.319-1.24-1.396zm5.487 0c-.73.077-1.277.687-1.24 1.396l-.005.098c-.058.354.035.715.26 1.002.211.27.522.453.869.511.706-.112 1.222-.713 1.2-1.491.11-.703-.367-1.363-1.084-1.516z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0V0z" />
        </clipPath>
      </defs>
    
   </React.Fragment> 
))

Pets.displayName = "Pets"
