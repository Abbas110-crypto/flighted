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
        <p className={styles.paragraph}>We Are A Growth Marketing<br /> Agency Based In Brooklyn, NY.</p>
        </Col>
      </Row>
      <Row>
        <h1 className={styles.logoheading}>Sarfo</h1>
      </Row>
    </div>
  )
}

export default Footer;