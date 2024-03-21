"use client";
import React,{useEffect} from 'react'
import {Row,Col} from 'antd'
import styles from './Team.module.css';
import Image from 'next/image';
import { initAOS } from '../../AOS/Interceptor';

function Teams() {
  
  useEffect(() => {
    initAOS();
  }, []);
  
  return (
    <div>
    <div className={styles.main}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={8} xl={9}>
          <h4 className={styles.heading} data-aos="fade-right">A Team Of<br />Experts</h4>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={1}>
          <div className={styles.divider}></div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={14}>
          <div data-aos="fade-left">
          <h4 className={styles.heading}>18+</h4>
          <p className={styles.paragraph}>combined years of growth marketing expertise:<br /> agency-side, consulting, and in-house<br />experience</p>
          </div>
          </Col>
        </Row>
        </div>
        <div className={styles.main1}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className={styles.team}>
          <Image
          src="https://i.ibb.co/sgkc87b/Founder.jpg"
          alt="founder"
          width={200}
          height={300}
          className={styles.founderImage}
          />
          <div className={styles.text}>
            <h2 className={styles.hd1}>Ali Faraz</h2>
            <p className={styles.paragraph1}>Operation</p>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className={styles.team}>
          <Image
          src="https://i.ibb.co/y5QVFYT/Lead.jpg"
          alt="founder"
          width={200}
          height={300}
          className={styles.founderImage}
          />
          <div className={styles.text}>
            <h2 className={styles.hd1}>Abbas Haider</h2>
            <p className={styles.paragraph1}>Development Lead</p>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className={styles.team}>
          <Image
          src="https://i.ibb.co/Jx7RR2r/image.png"
          alt="founder"
          width={200}
          height={300}
          className={styles.founderImage}
          />
          <div className={styles.text}>
            <h2 className={styles.hd1}>Jauher Mustafa</h2>
            <p className={styles.paragraph1}>Sales Manager</p>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className={styles.team}>
          <Image
          src="https://i.ibb.co/PC0DhQ0/Product.jpg"
          alt="founder"
          width={200}
          height={300}
          className={styles.founderImage}
          />
          <div className={styles.text}>
            <h2 className={styles.hd1}>Yawar Abbas</h2>
            <p className={styles.paragraph1}>Product Designer</p>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className={styles.team}>
          <Image
          src="https://i.ibb.co/FJZGV9w/junior-designer.jpg"
          alt="founder"
          width={200}
          height={300}
          className={styles.founderImage}
          />
          <div className={styles.text}>
          <h2 className={styles.hd1}>Tabish Ali</h2>
          <p className={styles.paragraph1}>Lead Graphics Designer</p>
        </div>
          
          </Col>
        </Row>
    </div>
    </div>
  )
}

export default Teams;