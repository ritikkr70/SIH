import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myimg from "./myimg.jpg";

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src={myimg} className='myimg' />
      <h1>WELCOME</h1>
      <p>Join Our Community And Start Exploring</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Upload Your Project
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contribute
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
