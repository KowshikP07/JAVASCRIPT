import React from 'react'
import '../css/leftside.css'
import red from '../assets/red-dead.jpg'
const Leftside = () => {
  return (
    <div className='leftmain'>
    <div className="rounded">
      <div className="circle"><img src={red} alt="red dead"/></div>
    </div>
    <div className="comp_logo"><div className="logo_cir"></div>
    <div className="logo_cir"></div>
    <div className="logo_cir"></div>
    <div className="logo_cir"></div></div>
    </div>
  )
}

export default Leftside
