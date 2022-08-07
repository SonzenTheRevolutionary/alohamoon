import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import setOpen from './Header'


function Menu(props) {


  return (
    <div className="absolute top-0 right-0 z-50 bg-black w-full h-screen md:w-1/3">
      <XIcon className="absolute top-6 right-6 z-50 w-10 h-10 text-linen" />
    </div>
  )
}

export default Menu