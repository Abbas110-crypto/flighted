import React from 'react'
import styles from '../Footer/Footer.module.css'
import { Button,Row,Col } from 'antd';

function Footer() {
  return (
    <div className={styles.main}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={12}>
        <div className={styles.text}>
            <h2 className={styles.heading}>Ready to talk?</h2>
            <Button className={styles.Button}>Contact Us</Button>
        </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={12}>
        <p className={styles.paragraph1}>We Are A Growth Marketing<br /> Agency Based In Brooklyn, NY.</p>
        </Col>
      </Row>
      <Row>
        <p className={styles.paragraph2}>At SARCFO, we are committed to providing exceptional CFO advisory and bookkeeping services. Our tailored approach, industry expertise, and dedication to client success make us the preferred choice for businesses looking to enhance their financial health and achieve sustainable growth.</p>
        <h1 className={styles.logo}>SARCFO</h1>
      </Row>
    </div>
  )
}

export default Footer;