import React from 'react'
import image1 from "../asset/pImage.png";
import image2 from "../asset/pImage1.png";
import image3 from "../asset/pImage2.png";
import image4 from "../asset/pImage3.png";
import image5 from "../asset/pImage4.png";
import { Link } from 'react-router-dom'

function Services() {
    return (
      <section className="programmeServices">
        <div className="serviceContainer">
          <div className="programServicesDetail">
            <h2>Founded in Silicon Valley. Built for Africa.</h2>
            <p>
              Gain the technical capabilities and the job-ready skills employers
              require. Through your Tech Port software engineering programme you will
              benefit from your peer community, unlock new experiences, and
              connect to opportunities that will make an impact.
            </p>
            <div className="programmeStart">
              <p> <b>Programme Start:</b> Monday 6 February 2023</p>
            </div>
            <Link to="/applications">
            <button>Apply Today</button>
            </Link>
          </div>
  
          <article>
            <div className="articleImagetext">
              <img src={image1} alt="articleImage1" />
              <p>Tech Skills for Tomorrow's Careers</p>
            </div>
            <div className="articleImagetext">
              <img src={image2} alt="articleImage2" />
              <p>Hands On, Real World Team-Based Projects</p>
            </div>
            <div className="articleImagetext">
              <img src={image3} alt="articleImage3" />
              <p>Programme fees waived in 2023</p>
            </div>
            <div className="articleImagetext">
              <img src={image4} alt="articleImage4" />
              <p>Remote Access, Monthly Starts</p>
            </div>
            <div className="articleImagetext">
              <img src={image5} alt="articleImage5" />
              <p>Career Growth with The ROOM</p>
            </div>
          </article>
        </div>
      </section>
    );
  }
  
  export default Services;
  
