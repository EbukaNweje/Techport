import React from 'react'
import Home from "../components/Home"
import About from '../components/About'
import Build from '../components/Build'
import Talent  from '../components/Talent'
import Services  from '../components/Services'
import Questions from  '../components/Questions'
// import Footer from '../components/Footer'
import "../css/style.css"
import "../css/mobie.css"

const All = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Build/>
      <Talent/>
      <Questions/>
    </div>
  )
}

export default All