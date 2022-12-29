import React from 'react'
import Logo from "../asset/Tech Portnew.PNG"
import {RiArrowDropRightLine} from "react-icons/ri"

const home = () => {
  return (
    <div className='Container'>
        <div className='Wrapper'>
            <img src={Logo} alt="Logo" className="Logo" />
            <h3>Equip Yourself for a World of Opportunity</h3>
            <span>Earn Your Software Engineering Certification Start Date: 23 January 2023</span>
            <button>Apply Today</button>
            <p>Learn More <RiArrowDropRightLine className='Arrow'/></p>
        </div>
    </div>
  )
}

export default home