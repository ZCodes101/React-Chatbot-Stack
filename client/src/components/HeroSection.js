import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/earth2.mp4' autoPlay loop muted />
      <h1>Alonzo W.</h1>
      <p>Software Engineer  <i class='fas fa-laptop-code ' /></p>
      <div className='hero-btns'>
        <Button 
          className='btnsH'
          buttonStyle='btnH--outline'
          buttonSize='btnH--large'
        >
         RESUME
        </Button>
        <Button
          className='btnsH'
          buttonStyle='btnH--primary'
          buttonSize='btnH--large'
          onClick={console.log('hey')}
        >
          Projects 
          <a href="http:://github.com/zcodes101"> <i class="fab fa-github "></i></a>

        </Button>
      </div>
    </div>
  );
}

export default HeroSection;