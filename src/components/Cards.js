import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blockchain.jpg'
              text='A Game Based On Cryptocurrency Mining'
              label='Blockchain'
              path='/products'
            />
            
            <CardItem
              src='images/webd.jpg'
              text='A Fully Functioning Blog Application'
              label='Web Development'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/data.jpg'
              text='Project On Sentimental Analysis'
              label='Data Science'
              path='/services'
            />
            
            <CardItem
              src='images/android.jpg'
              text='College Finder App for Students'
              label='Android'
              path='/sign-up'
            />
            <CardItem
              src='images/aiml.jpg'
              text='Stock Price Prediction using Machine Learning'
              label='AI/ML'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
