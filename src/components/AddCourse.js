import React, { useState, useEffect, useContext } from "react";
import form from "../images/Checklist.jpg";
import styles from "./addCourse.module.css";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import data from "../Data/University.json";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

const AddCourse = () => {
  const { user, setUser } = useContext(UserContext);
  let id = user && user[`id`];
  const [course, setCourse] = useState({
    name: "",
    university: "",
    difficultyLevel: "",
    link: "",
    About: "",
    img: "",
    dataFin: "",
  });
  const [validated, setValidated] = useState(false);
  const [postId, setPostId] = useState(0);
  const navigate = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "university") {
      const value = e.target.value;
      const choose = data.find((item) => {
        return item.university === value;
      });
      setCourse({
        ...course,
        [e.target.name]: value,
        img: choose.logo,
      });
    } else {
      setCourse({
        ...course,
        [e.target.name]: e.target.value,
      });
      console.log(course);
    }

    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      console.log(course);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(course),
        redirect: "follow",
      };
      fetch("http://localhost:8080/cours", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const requestOptionss = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ id: id, idCourses: data }),
            redirect: "follow",
          };
          fetch(`http://localhost:8081/${id}`, requestOptionss)
            .then((response) => response.json())
            .catch((err) => {
              console.debug("Error in fetch", err);
            });
        })
        .catch((err) => {
          console.debug("Error in fetch", err);
        });
      console.log(postId);
      // const requestOptionss = {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: JSON.stringify({ id: id, idCourses: postId }),
      //   redirect: "follow",
      // };
      // fetch(`http://localhost:8081/${id}`, requestOptionss)
      //   .then((response) => response.json())
      //   .then((data) => setPostId(data.id))
      //   .catch((err) => {
      //     console.debug("Error in fetch", err);
      //   });

      setValidated(true);
    }
    if (course.name && course.img) {
      alert("cours ajouté avec succès");
      navigate.push("/Courses");
    } else {
      alert("Veuillez remplir les champs");
    }

    setCourse({
      university: "",
      name: "",
      about: "",
      img: "",
      difficultyLevel: "",
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1%" }}>
        Add Course:
        <div className={styles[`line`]}></div>
      </h1>
      <div className={styles[`cont`]}>
        <div className={styles[`cont-img`]}>
          <img src={form} />
        </div>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group as={Col} md="8" controlId="university">
            <p>University :</p>
            <Form.Select
              value={course.university}
              aria-activedescendant="on"
              onChange={handleChange}
              name="university"
            >
              {/* <option value= {null}>Choose...</option> */}
              {data.map((item) => {
                return (
                  <option value={item[`university`]}>
                    {item[`university`]}
                  </option>
                );
              })}
            </Form.Select>
            {/* {console.log(university)} */}
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="name">
            <p>Name of course :</p>
            <Form.Control
              required
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
              value={course.name}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="8"
            controlId="levelDifficulty"
            //onChange={(e) => setPassword(e.target.value)}
          >
            <p>Level Difficulty :</p>
            <Form.Select
              value={course.difficultyLevel}
              aria-activedescendant="on"
              onChange={handleChange}
              name="difficultyLevel"
            >
              {/* <option value={null}>Choose...</option> */}
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Form.Select>
            {/* {console.log(levelDifficulty)} */}
          </Form.Group>
          <Form.Group as={Col} md="8" controlId="details">
            <p>Description :</p>
            <Form.Control
              required
              type="text"
              placeholder="Description"
              onChange={handleChange}
              name="about"
              value={course.about}
            />
            <Form.Control.Feedback type="invalid">
              description invalid.
            </Form.Control.Feedback>
            {/* {console.log(description)} */}
          </Form.Group>
          <Form.Group as={Col} md="8" controlId="details">
            <p>Description :</p>
            <Form.Control
              required
              type="date"
              placeholder="Date d'échéance"
              onChange={handleChange}
              name="dateFin"
              value={course.date}
            />
            <Form.Control.Feedback type="invalid">
              date invalid.
            </Form.Control.Feedback>
            {/* {console.log(description)} */}
          </Form.Group>

          <Button
            className={styles[`btn`]}
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCourse;
