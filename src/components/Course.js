import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./course.module.css";

export const Course = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const url = `http://localhost:8080/cours/${id}`;
  console.log(url);

  async function getBook() {
    const res = await fetch(url);
    const data = await res.json();
    setBook(data);
  }

  useEffect(() => {
    getBook();
  }, []);
  useEffect(() => {
    book && console.log(book);
  }, [book]);
  return (
    <div className={styles[`cont-course`]}>
      <div className={styles[`cont-image`]}>
        <img src={book.img} className={styles[`img1`]} alt="Card image cap" />
      </div>
      <div className={styles[`cont-detail`]}>
        <h5>{book[`name`]}</h5>
        <p>{book[`university`]}</p>
        <p>{book[`about`]}</p>
        <Button className={styles[`btnin`]}>Get it now</Button>
      </div>
    </div>
  );
};

export default Course;
