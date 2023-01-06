import React from 'react'
import "../css/style.css"
import "../css/mobie.css"
import Logo from "../asset/Tech Port full.png"
import { Link } from 'react-router-dom'


const Applications = () => {
  return (
    <div className='ApplicationsContainer'>
         <div className='LogoContainer'>
         <Link to="/">
          <img src={Logo} alt="Logo" className="Logo" />
         </Link>
         </div>
    <div className='ApplicationsBody'>
        <div className='ApplicationsBodyHeader'> <h3> Your Future Has No Limits </h3> </div>
       <div className='ApplicationsBodyPrg'> <p>Welcome to your application for the 6-month Tech Port Software Engineering programme.</p></div>
       <div className='ApplicationsBodyPrg'> <p>You have taken the next step in achieving a career in one of the most in-demand fields. With the training and certification, Tech Port provides, you will have the opportunity to join other talented tech professionals who are helping to digitally transform businesses around the globe. </p></div>

       <div className='ApplicationsForm'>
        <div className='ApplicationFormBody'>
            <input type="text" placeholder='Enter Your fullname' />
            {/* <p>Put in your FullName</p> */}
            <input type="email" placeholder='Enter Your Email' />
            {/* <p>Put in your email</p> */}
            <select>
                <option>Gender</option>
                <option>male</option>
                <option>Female</option>
                <option>other</option>
            </select>
            {/* <p>Put in your gender</p> */}
            <input type="tel" placeholder='Enter Your phone number' />
            {/* <p>Put in your phone number</p> */}
            {/* <input type="date" /> */}
            {/* <p>Put in your phone date of birth</p> */}
            <input type="text" placeholder='Enter Your country of origin' />
            {/* <p>Put in your country of origin</p> */}
            <input type="text" placeholder='Enter Your country of origin' />
            {/* <p>Put in your country of origin</p> */}
            <input type="text" placeholder='Enter Your country of residence' />
            {/* <p>Put in your country of residence</p> */}
            <input type="text" placeholder='Enter Your city of residence' />
            {/* <p>Put in your city of residence</p> */}

            <button>Submit Applications</button>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Applications