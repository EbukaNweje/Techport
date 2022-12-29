import React from 'react'
import Home from "../components/Home"
import About from '../components/About'
import Build from '../components/Build'
import Talent  from '../components/Talent'
import "../css/style.css"
import "../css/mobie.css"

const index = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Build/>
      <Talent/>
    </div>
  )
}

export default index