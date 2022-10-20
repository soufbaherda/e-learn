import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './about.module.css';
import image from './images/home.png';
import data from "../Data/University.json"
const AboutUs = () => {
    return (
        <div>
            <div className={styles[`cont`]}>
                <div className={styles[`cont-story`]}>
                    <h1>
                        Our Story :
                        <div className={styles[`line`]}></div>
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quod odit a est, fugit maxime dolorem quae voluptatibus soluta, iste cumque commodi. Necessitatibus odit atque nisi aliquid porro, minima corporis ipsam numquam eaque explicabo, sunt possimus vitae officia veritatis maxime, corrupti quaerat libero ab.
                    </p>
                </div>
                <div className={styles[`cont-story`]}>
                    <div className={styles[`cont-image`]}>
                        <img src={image} />
                    </div>
                </div>
            </div>
            <div className={styles[`cont-story`]}>
                <h1>
                    Our Partners:
                    <div className={styles[`line`]}></div>
                </h1>
            </div>
            <div className={styles[`cont-partners`]}>
                {data.map(item => {
                    return (
                        <div style={styles[`category `]} key={item[`univesity`]} >
                                <div className={styles[`cont-story`]}>
                                    <img style = {{height: "30%"}}src={item[`logo`]} alt="Card image cap" />
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AboutUs;
