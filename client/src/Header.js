import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbarH'>
        <div className='navbar-containerH'>
          <Link to='/' className='navbar-logoH' onClick={closeMobileMenu}>
             Alonzo Silva 
           
          </Link>
          <div className='menu-iconH' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu activeH' : 'nav-menuH'}>
            <li className='nav-itemH'>
              <Link to='/' className='nav-linksH' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
 
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;