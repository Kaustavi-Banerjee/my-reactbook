import React from 'react'
import logo from './../logo.jpeg';
import Nav from './Nav';

export default function Header() {
  return (
    <div className='flex p-3 justify-between items-center'>
      <img src={logo} alt="logo" width={52} height={52} />
      <Nav />
    </div>
  )
}
