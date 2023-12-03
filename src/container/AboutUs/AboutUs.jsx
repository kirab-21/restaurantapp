import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon img'></img>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis facere explicabo quia numquam hic officia molestiae magnam? Ducimus eaque voluptates ipsam, doloribus repellendus quam, iure, expedita natus neque repudiandae molestias!</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
      <div className='app__about-content_knife flex__center'>
        <img src={images.knife} alt="knife img"></img>

      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt='spoon img'></img>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis facere explicabo quia numquam hic officia molestiae magnam? Ducimus eaque voluptates ipsam, doloribus repellendus quam, iure, expedita natus neque repudiandae molestias!</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
