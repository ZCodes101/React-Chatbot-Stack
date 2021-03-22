import React from 'react';
import '/App.css';
import '/HeroSection.css';

function Landing() {
    return (
      <div className='hero-container'>
       <video src='./videos/video-2.mp4' autoPlay loop muted />
        <h1>Alonzo S.</h1>
        <p>Software Engineer</p>
        
      </div>
    );
  }
  
  export default Landing;