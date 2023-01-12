import React from 'react'
import Logo from "../asset/Tech Portnew.PNG"

const Footer = () => {
  return (
    <div className='FooterContainer'>
         <img src={Logo} alt="Logo" className="Logo" />
         <span>© TechPort 2023 || mytechports@gmail.com </span>
    </div>
  )
}

export default Footer