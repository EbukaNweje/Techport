import React from 'react'
import Logo from "../asset/Tech Portnew.PNG"
import {RiArrowDropRightLine} from "react-icons/ri"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Container'>
        <div className='Wrapper'>
            <img src={Logo} alt="Logo" className="Logo" />
            <h3>Equip Yourself for a World of Opportunity</h3>
            <span>Earn Your Software Engineering Certification Start Date: 23 January 2023</span>
            <Link to="/applications">
              <button>Apply Today</button>
            </Link>
            <p>Learn More <RiArrowDropRightLine className='Arrow'/></p>
        </div>
    </div>
  )
}

export default Home