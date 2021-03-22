import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import About from '/components/pages/About';
import Header from '../Header'


import HeroSection from '../components/HeroSection';
import About from '../components/pages/About';
import Cards from '../components/pages/Cards';
import Footer from '../components/pages/Footer';

import Chatbot from '../components/chatbot/Chatbot'




function Home() {
  return (
    
    <>
        



       <Router>


        <Header />

            <HeroSection/>
            <About />
          <hr/>
          <Cards/>

        <Switch>
          <Route path='/'  />
          <Route path='/about'  />
          <Route path='/projects'  />
          <Route path='/sign-up'    />
        </Switch>         

              <Footer/>

      </Router>
      <Chatbot/>


    </>
    
  );
}


export default Home;