import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'react-bootstrap';
import styles from './Slider.module.css'
import 'swiper/css';
import data from '../Data/courses'
const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            style={{width : "90%",backgroundColor :"#EEEFF3", display: 'flex'}}
        >

            {data.map(item => {
                return (
                    <SwiperSlide style={{height:"600px"}} key={item[`Name`]} >
                        <div className="card"style={{height:"100%"}} >
                            <img className="card-img-top" style ={{height:"50%"}}src={item[`Image`]} alt="Card image cap"/>
                                <div className="card-body" style ={{textOverflow:"ellipsis"}}>
                                    <h5 className="card-title">{item[`Name`]}</h5>
                                    <p className="card-text ">{item[`University`]}</p>
                                    <div className={styles[`line`]}></div>
                                    <p className={styles[`about`]}>{item[`About`]}</p>
                                </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}

export default Slider;
