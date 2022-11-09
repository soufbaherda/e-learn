import React, { useEffect, useState, useContext } from "react";
import styles from "./Slider.module.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Courses = () => {
  const [books, setBooks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [book, setBook] = useState([]);
  const [dataa, setDataa] = useState([]);
  const { user, setUser } = useContext(UserContext);
  let id = user && user.id;

  useEffect(() => {
    async function getBooks() {
      const res = await fetch("http://localhost:8080/cours");
      const data = await res.json();
      setBooks(data);
      console.log(data);
      setData(data);
    }

    getBooks();
  }, []);

  useEffect(() => {
    async function getBook() {
      const res = await fetch(`http://localhost:8081/${id}`);
      const data = await res.json();
      setBook(data.courses);
      console.log(data.courses);
      setDataa(data.courses);
    }
    getBook();
  }, []);

  // useEffect(() => {
  //     console.log(books)
  // }, [books])

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

  function minus(firstList, secondList) {
    const thirdList = [];
    for (let b of firstList) {
      let v = false;
      for (let bk of secondList) {
        if (bk.id == b.id) {
          v = true;
        }
      }
      if (!v) {
        thirdList.push(b);
      }
    }
    return thirdList;
  }

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
        {(dataa ? minus(data, dataa) : data).map((item) => {
          return (
            <>
              <div className="card" style={{ height: "500px" }}>
                <Link
                  to={`/Course/${item.id}`}
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

export default Courses;
