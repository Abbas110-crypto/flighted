import React from 'react'
import styles from './Testimonials.module.css'
import { Row } from 'antd';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';


function Testimonials() {
    return (
        <div>
            <h3 className={styles.heading}>Testimonials</h3>
            <Row gutter={16} className={styles.CustomRow}>
                <div className={styles.slider}>
                    <Marquee direction='left'>
                        <Image
                            src="https://i.ibb.co/NnPK0hQ/15.jpg" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/nQpD3JG/14.jpg" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/7pTwPxG/13.jpg" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/2SY4twy/11.jpg" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/nQpD3JG/14.jpg"
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/7pTwPxG/13.jpg"// Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/2SY4twy/11.jpg" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                    </Marquee>
                </div>
            </Row>
        </div>
    )
}

export default Testimonials;