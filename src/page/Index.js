import React from 'react'
import Home from "../components/Home"
import About from '../components/About'
import Services from '../components/Services'
import "../css/style.css"
import "../css/mobie.css"

const index = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Services />
    </div>
  )
}

export default index