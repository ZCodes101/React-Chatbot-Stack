import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/cb.jpg'
              text='Used DialogFlow to process natural language and Node.JS and React to build chatbot.
              Dynamically able to remember things, that is store information into a noSQL database. Embed on React webpage and intergrated with google dialogflow   ' 
              
              label='Chat bot with NLU/NLP on React webpage'
              
            />
            <CardItem
              src='./images/face1.jpg'
              text='Created a Face Recognition (AI) project from scratch with Python, OpenCV , Machine 
              Learning Algorithms and Flask. Integrated it on webpage, which allows user to upload 
              image or video for automatic Face Recognition.'
              label='Facial recogization web app '
              
              
            />
            

          </ul>
          <ul className='cards__items' >
            <CardItem
              src='./images/drive1.jpg'
              text='Used Deep Learning, Computer Vision and Machine Learning techniques to Build an 
              Autonomous Car with Python. It can differentiate road signs and adapt to hazards'
              label='Self-Driving Car – Applied Deep Learning'
            />
            <CardItem
              src='./images/apt.jpg'
              text=' Utilized Java and JavaFX to create an inventory management system GUI and integrated a SQL 
              Database using JDBC.
              • Allow a user/company to easily manage customers and the appointments without directly 
              modifying the database.
              • Included functions to add, modify, search, and delete parts and products'
              label='Realtime Appointment Management System'
            />
            <CardItem
              src='./images/chinese.jpg'
              text='Used android studio to build a fully functional language learning app.  Integrated it with google translate api and a "Tinder" like swipe system to learn flash cards'
              label='Ni Hao. Mandarin Chinese learning app for android'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;