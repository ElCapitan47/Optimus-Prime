import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='Navbar'>
      
        <Link to='/' className='links'>HOME</Link>
        <Link to='/checkPrime' className='links'>CHECK PRIME</Link>
        <Link to='/primeOrder' className='links'>PRIME ORDER</Link>
        <Link to='/about' className='links'>ABOUT</Link>
     
    </div>
  )
}

export default Navbar
