import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './about.module.css';
import image from '../images/story.jpg';
import data from "../Data/University.json"
import Teachers from './teachers';
const AboutUs = () => {
    return (
        <div>
            <div className={styles[`cont`]} data-aos="fade-down">
                <div className={styles[`cont-story`]} data-aos ="fade-left">
                    <h1> 
                        Our Story :
                        <div className={styles[`line`]}></div>
                    </h1>

                    <p>
                        E-learn was founded by Baherda Soufiane and Slimani Achraf in 2019 with a vision of providing life-transforming learning experiences to learners around the world. Today, E-Learn is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. E-Learn received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.                    </p>
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
            <div className={styles[`cont-partners`]} data-aos="fade-down">
                {data.map(item => {
                    return (
                        <div style={styles[`category `]} key={item[`univesity`]} >
                            <div className={styles[`cont-story`]}>
                                <img style={{ height: "30%" }} src={item[`logo`]} alt="Card image cap" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles[`cont-story`]}>
                <h1>
                    Our teachers:
                    <div className={styles[`line`]}></div>
                </h1>
            </div>
            <Teachers/>
        </div>
    );
}

export default AboutUs;
