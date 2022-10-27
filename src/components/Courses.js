import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css'
import {  SwiperSlide } from 'swiper/react';
import { Grid } from '@mui/material';

const Courses = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        async function getBooks() {
            const res = await fetch('http://localhost:8080/cours')
            const data = await res.json()
            setBooks(data)
        }

        getBooks()
    }, [])

    useEffect(() => {
        console.log(books)
    }, [books])

    return (
        <div className={styles[`card-course`]} >            
            {books.map(item => {
                return (
                    <div className="card" style={{height:"600px"}}>
                        {console.log(item.img)}
                            <img className="card-img-top" style ={{height:"50%", padding: "1rem 2rem"}} src={item.img} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item[`name`]}</h5>
                                    <p className="card-text ">{item[`university`]}</p>
                                    <div className={styles[`line`]}></div>
                                    <p className={styles[`about`]}>{item[`about`]}</p>
                                </div>
                        </div>

                )
            })}
        </div>
    );
}

export default Courses;
