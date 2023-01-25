import React from 'react'
import landingimg from "../Images/photo-grid.png"
function Hero() {
  return (
    <div className='hero'>
        <img src={landingimg}className="landing-img" ></img>
        <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero