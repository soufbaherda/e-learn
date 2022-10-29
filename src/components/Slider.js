import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css'
import 'swiper/css';
import data from '../Data/courses'
const Slider = () => {
    const [books, setBooks] = useState([]); 
    useEffect(() => {
        async function getBooks() {
            const res = await fetch('http://localhost:8080/cours')
            const data = await res.json()
            setBooks(data);
        }

        getBooks()
    }, [])
    return (
        <Swiper
            slidesPerView={4}
            paginationClickable= "true"
            spaceBetween={50}
            mouseWheelControl= "true"
            parallax= "true"
            speed= "300"
            style={{width : "90%",backgroundColor :"#EEEFF3", display: 'flex'}}
        >

            {books.map(item => {
                return (
                    <SwiperSlide style={{height:"450px"}} key={item[`name`]} >
                        <div className="card"style={{height:"100%"}} >
                            <img className="card-img-top" style ={{height:"50%"}}src={item[`img`]} alt="Card image cap"/>
                                <div className="card-body" style ={{textOverflow:"ellipsis"}}>
                                    <h5 className="card-title">{item[`name`]}</h5>
                                    <p className="card-text ">{item[`university`]}</p>
                                    <div className={styles[`line`]}></div>
                                    <p className={styles[`about`]}>{item[`about`]}</p>
                                </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}

export default Slider;
