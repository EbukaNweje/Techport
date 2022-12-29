import React from "react";
import image from "../asset/pexels-andrea-piacquadio-3769021.jpg";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutImage">
        <img src={image} alt="aboutImage" />
      </div>
      <div className="aboutText">
        <h1>Digital Transformation is the Next Industrial Revolution</h1>
        <p>
          Companies across the globe will continue to face technology talent
          gaps over the next decade. Software engineers are some of the most
          in-demand, higher paid professionals helping to navigate the advanced
          digital transformation taking place across the business landscape.
          <br />
          <br />
          Our 12-month ALX Software Engineering Programme prepares you with the
          technical and work-ready skills for a global career as a Full-Stack
          Developer.
        </p>
      </div>
    </div>
  );
}

export default About;
