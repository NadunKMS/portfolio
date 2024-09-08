import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav>
        <div className='flex flex-row justify-center space-x-4 md:py-8 py-6 text-sm'>
            <Link className='hover-animate hover:font-bold' href='/projects'>Projects</Link>
            <Link className='hover-animate hover:font-bold' href='/about'>About</Link>
            <Link className='hover-animate hover:font-bold' href='https://nadunkms.medium.com' target='_blank'>Blog</Link>
        </div>
    </nav>
  )
}

export default Nav