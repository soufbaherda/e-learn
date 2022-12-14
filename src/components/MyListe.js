import React, { useEffect, useState, useContext } from "react";
import styles from "./Slider.module.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
const MyListe = () => {
  const [books, setBooks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const { user, setUser } = useContext(UserContext);
  let id = user && user[`id`];

  useEffect(() => {
    async function getBooks() {
      const res = await fetch(`http://localhost:8081/${id}`);
      const data = await res.json();
      setBooks(data.courses);
      console.log(data.courses);
      setData(data.courses);
    }

    getBooks();
  }, []);

  //   useEffect(() => {
  //     console.log(books);
  //   }, [books]);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  useEffect(() => {
    setData(
      books.filter((book) => {
        if (inputText === " ") {
          return book;
        }
        // console.log(book.name.toLowerCase());
        // console.log(inputText)
        else return book.name.toLowerCase().includes(inputText);
      })
    );
    // console.log(data);
  }, [inputText]);

  return (
    <div className={styles[`page`]}>
      <div className={styles[`cont-story`]}>
        <h1>
          Courses :<div className={styles[`line`]}></div>
        </h1>
      </div>
      <div className={styles[`search`]}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={styles[`text`]}
          label="Search"
          onChange={inputHandler}
        />
      </div>
      <div className={styles[`card-course`]}>
        {data.map((item) => {
          return (
            <>
              <div className="card" style={{ height: "500px" }}>
                <Link
                  to={
                    user?.role == "etudiant"
                      ? `/Course/${item.id}/inscription`
                      : `/Course/Edit/${item.id}`
                  }
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className="card-img-top"
                    style={{ height: "50%", padding: "1rem 2rem" }}
                    src={item.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item[`name`]}</h5>
                    <p className="card-text ">{item[`university`]}</p>
                    <div className={styles[`line`]}></div>
                    <p className={styles[`about`]}>{item[`about`]}</p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyListe;
