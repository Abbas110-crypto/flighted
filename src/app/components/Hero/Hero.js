"use client";
import React,{useEffect} from 'react'
import {Row,Col, Button} from 'antd';
import Image from 'next/image';
import { initAOS } from '../../AOS/Interceptor'; // Import the AOS initialization function
import styles from './Hero.module.css';
import Marquee from 'react-fast-marquee';

function Hero() {
    useEffect(() => {
        initAOS(); // Call the AOS initialization function when the component mounts
      }, []);
  return (
    <div data-aos="fade-up">
    <div className={styles.main}>
        <Row>
            <Image
               src="https://framerusercontent.com/images/LZFgfLmnHu200J22jkrZ6Q5CVDM.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='55'
               height='55'
               className={styles.mobileicon}
            />
            <Image
               src="https://framerusercontent.com/images/yif60XXVBZ3B2fKl4ucOuqIUE.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='55'
               height='55'
               className={styles.mobileicon}
            />
            <Image
               src="https://framerusercontent.com/images/sttkfVr9RuKQSFMZf5OfgMt8fo.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='55'
               height='55'
               className={styles.mobileicon}
            />
            <Image
               src="https://framerusercontent.com/images/i8tyymRuUnNJ29ThCDBRfVIfxt4.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='55'
               height='55'
               className={styles.mobileicon}
            /> 
        </Row>
        <Row>
            
           
            <p className={styles.hd1}><Image
               src="https://framerusercontent.com/images/LZFgfLmnHu200J22jkrZ6Q5CVDM.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='66'
               height='68'
               className={styles.icon}
            /> We increase revenue for<br />DTC Brands <Image
               src="https://framerusercontent.com/images/yif60XXVBZ3B2fKl4ucOuqIUE.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='66'
               height='68'
               className={styles.icon}
            /> through<br /><span className={styles.hd3}>better ads, <Image
            src="https://framerusercontent.com/images/sttkfVr9RuKQSFMZf5OfgMt8fo.webp" // Path to your image inside the public directory
            alt="Socialmedia"
            width='66'
            height='68'
            className={styles.icon}
         /> landing pages<br />& paid media expertise <Image
         src="https://framerusercontent.com/images/i8tyymRuUnNJ29ThCDBRfVIfxt4.webp" // Path to your image inside the public directory
         alt="Socialmedia"
         width='66'
         height='68'
         className={styles.icon}
      /></span> </p>
        </Row>
        </div>
            
      
        <Row>
        <div className={styles.p2}>
            <p className={styles.paragraph}>Personalized, full-funnel growth support that goes beyond channel-specific execution.</p>
        </div>
        </Row>
        <Row>
        <div className={styles.p3}>
           <Button className={styles.Button}>Contact Us</Button>
        </div> 
        </Row>
        <Row gutter={16} className={styles.CustomRow}>
        <div className={styles.slider}>
        <Marquee direction='left'> 
        <Image
               src="https://framerusercontent.com/images/ovMyIXxOXHrFNz9MmucK2VLORns.webp?scale-down-to=1024" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://framerusercontent.com/images/nlDQJcHiY0TNiL2K11FqlHMySA.webp?scale-down-to=1024" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://framerusercontent.com/images/xy8L64T5nIsNMMhDkHYieGeBgc.webp?scale-down-to=4096" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://i.ibb.co/ZXfZ5Gf/frame4.jpg" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://i.ibb.co/HG5dfmK/frame3.jpg" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://i.ibb.co/qFWM9j7/frame2.jpg" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        <Image
               src="https://i.ibb.co/JBFt8z1/frame1.jpg" // Path to your image inside the public directory
               alt="Socialmedia"
               width='300'
               height='450'
               className={styles.ImageSlider}
            />
        </Marquee>
        </div>
        </Row>
        <Row>
        <div className={styles.CompanySlider}>   
        <Marquee direction='right' className={styles.marquee}>          
        <Image
               src="https://framerusercontent.com/images/ZD5q25u7sbIsN7Bhxh7Bu186Cw.webp?scale-down-to=512" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        <Image
               src="https://framerusercontent.com/images/G47sLGXvcnN3K2qSj5wn1D6BJOE.webp?scale-down-to=512" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
       <Image
               src="https://framerusercontent.com/images/oaRyqdd6UR7IVbs1gzNKoRnrGwg.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        <Image
               src="https://framerusercontent.com/images/cOK3iXOlaJYyRP9O1IUFS0L1Hc.webp?scale-down-to=512" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        <Image
               src="https://framerusercontent.com/images/bysDmoRskSv1ri2rxamm0DPLISY.webp?scale-down-to=512" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        <Image
               src="https://framerusercontent.com/images/HrYUi3s6hPyCalkdF7EaHonZH4.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        <Image
               src="https://framerusercontent.com/images/zE8IS4tyVpjZrqO776fkrwpHUWs.webp" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
         <Image
               src="https://framerusercontent.com/images/1GKrJHyC5wwd62Czj4puIWyIGbU.webp?scale-down-to=512" // Path to your image inside the public directory
               alt="Socialmedia"
               width='172'
               height='30'
               className={styles.CompanyItem}
            />
        </Marquee>
        </div> 
        </Row>
        </div>
  )
}

export default Hero;