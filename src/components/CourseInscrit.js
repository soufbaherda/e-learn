import React from "react";
import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import styles from "./course.module.css";
import { UserContext } from "./UserContext";

export const CourseInscrit = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [postId, setPostId] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useHistory();
  let id_etd = user && user[`id`];
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

  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(id_etd);
    fetch(`http://localhost:8081/user/course/${id_etd}/${id}`, {
      method: "DELETE",
    });
    navigate.push("/Myliste");
  };
  return (
    <div className={styles[`cont-course`]}>
      <div className={styles[`cont-image`]}>
        <img src={book.img} className={styles[`img1`]} alt="Card image cap" />
      </div>
      <div className={styles[`cont-detail`]}>
        <h5>{book[`name`]}</h5>
        <p>{book[`university`]}</p>
        <p>{book[`about`]}</p>
        <p>niveau de difficulté : {book[`difficultyLevel`]}</p>
        <p>date d'échéance : {book[`dateFin`]}</p>
        <Button className={styles[`btnin`]} onClick={handleClick}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CourseInscrit;
