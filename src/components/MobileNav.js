import React from 'react';
import { nav } from '../data'

const MobileNav = () => {
  return (  
    <div className='bg-accent/95 w-full h-full'>
        <ul className='h-full flex flex-col justify-center gap-y-8 items-center'>
          {nav.map((item, index) => {
            const { href, name } = item
            return (
              <li key={index}>
                <a href={href} className='link text-white text-xl'>{name}</a>
              </li>
            )
          })}
        </ul>
    </div>
  )
};

export default MobileNav;
