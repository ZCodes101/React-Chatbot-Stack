import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
      
        <div className='footer-link-wrapper'>
     
          <div class='footer-link-items'>
        
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <i class='fas fa-laptop-code' />
            </Link>
          </div>
          <small class='website-rights'>Created by a human © 2020</small>
          <div class='social-icons'>
   
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
  
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;