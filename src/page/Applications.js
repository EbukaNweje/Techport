import React, { useState } from 'react'
import "../css/style.css"
import "../css/mobie.css"
import Logo from "../asset/Tech Port full.png"
import { Link } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


const Applications = () => {

  const navigate = useNavigate()
  // const [msg, setMsg] = useState()
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [gender, setGender] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [countryOfOrigin, setCountryOfOrigin] = useState()
  const [countryOfResidenceta, setCountryOfResidence] = useState()
  const [cityOfResidenceta, setCityOfResidence] = useState()

  const allFrom = {
    fullName,
    email,
    gender,
    phoneNumber,
    countryOrigin: countryOfOrigin,
    countryResidence: countryOfResidenceta,
    CityOfResidence: cityOfResidenceta,
  }
 
  const AddFrom = async (e) =>{
    if(!fullName || !email || !gender || !phoneNumber || !countryOfOrigin || !countryOfResidenceta || !cityOfResidenceta){
      toast.warn('🦄 You can not leave any fild enty!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      await axios.post('https://techport-lvvw.onrender.com/api/v1/applications', allFrom)
      .then(res=> console.log(res))
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
          
          setTimeout(()=>{
            navigate("/")
          },[6000]) 
        }
  }

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
          {/* <span>{msg}</span> */}
            <input type="text" placeholder='Enter Your fullname' value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            {/* <p>Put in your email</p> */}
            <select onChange={(e)=>{ setGender(e.target.value)}}>
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            {/* <p>Put in your gender</p> */}
            <input type="tel" placeholder='Enter Your phone number' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
            {/* <p>Put in your phone number</p> */}
            {/* <input type="date" /> */}
            {/* <p>Put in your phone date of birth</p> */}
            <input type="text" placeholder='Enter Your country of origin' value={countryOfOrigin} onChange={(e)=> setCountryOfOrigin(e.target.value)}/>
            {/* <p>Put in your country of origin</p> */}
            <input type="text" placeholder='Enter Your country of residence' value={countryOfResidenceta} onChange={(e)=> setCountryOfResidence(e.target.value)}/>
            {/* <p>Put in your country of residence</p> */}
            <input type="text" placeholder='Enter Your city of residence' value={cityOfResidenceta} onChange={(e)=> setCityOfResidence(e.target.value)}/>
            {/* <p>Put in your city of residence</p> */}

            <button onClick={(e)=>AddFrom()}>Submit Applications</button>
            <ToastContainer />
        </div>
    </div>
    </div>

    </div>
  )
}

export default Applications