"use client";
import React,{useEffect} from 'react'
import styles from './Container.module.css';
import {Row,Col} from 'antd';
import { initAOS } from '../../AOS/Interceptor'; 
import Image from 'next/image';

function Container() {
    useEffect(() => {
        initAOS();
      }, []);
  return (
    <div>
    <Row>
        <div className={styles.main} data-aos="fade-right">
           <h3 className={styles.heading}>Our Secret Sauce</h3>
           <p className={styles.paragraph1}>The days of ad agencies simply pushing buttons in an ad platform are over.<br /> Success in performance marketing now relies on 3 focus areas working together interdependently:</p>
           <h6 className={styles.subheading}>Paid Media Expertise, Creative Strategy,</h6>
           <h6 className={styles.subheading}>Landing Page Optimization</h6>    
        </div>
    </Row>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div className={styles.container1}>
        <div data-aos="fade-right">
        <h1 className={styles.h1}>Paid Media Expertise</h1>
        <p className={styles.paragraph2}>The days of simply pushing buttons in Facebook Ads Manager are over. Our expert tactics, refined through managing $50mil+ across diverse brands, offer the winning edge, tailored to your product, spend, and price point.</p>
        </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024"
        alt="cont1"
        width="500"
        height="480"
        className={styles.img}
        />
        </div>
    </Col>       
    </Row>
    </div>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 10 }}>
    <div className={styles.container1}>
    <div data-aos="fade-right">
        <h1 className={styles.h1}>Creative Strategy & Production</h1>
        <p className={styles.paragraph2}>Crafting compelling ad creative is pivotal for success in performance marketing. Our meticulous testing and survey analysis unveil your customer's preferences, allowing our top-tier editors to design converting creatives tailored to your unique value propositions.</p>
    </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 14 }}
    >
        <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/Z1xWYU2XITG6USIFJRqqCwbNU.webp?scale-down-to=1024"
        alt="cont1"
        width="630"
        height="490"
        className={styles.img}
        />
        </div>
    </Col>       
    </Row>
    </div>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div className={styles.container1}>
    <div data-aos="fade-right">
        <h1 className={styles.h1}>Landing Page Optimization</h1>
        <p className={styles.paragraph2}>If you don’t already have a landing page you feel confident in, our team will get you there. Each Flighted landing page is rooted in data, designed mobile-first, and most importantly, always living and breathing as we rigorously optimize each page through ongoing A/B Testing.</p>
    </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024"
        alt="cont1"
        width="500"
        height="480"
        className={styles.img}
        />
    </div>
    </Col>       
    </Row>
    </div>
    </div>
  )
}

export default Container;