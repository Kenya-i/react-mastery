import React from 'react'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <nav className='flex gap-5 p-4 bg-sky-400'>
        <Link to="/">ホーム</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}
