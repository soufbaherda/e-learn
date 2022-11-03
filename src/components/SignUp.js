import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './signUp.module.css';
import image from '../images/Community.png'
import { Button, Form } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("etudiant");
    const [mailerror, setMailerror] = useState("false");
    const navigate = useHistory();
    function navigateToHome() {
        navigate.push("/logIn");
      }
    const verify = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch("http://localhost:8081/verify/" + email, requestOptions)
            .then((response) => response.json())
            .then((data) => { setMailerror(data.exist); });
    };
    const handleSubmit = (event) => {
        verify();
        const form = event.currentTarget;
        if (form.checkValidity() === false || mailerror === "true") {
            event.preventDefault();
            event.stopPropagation();
        } else {
            var compte = JSON.stringify({
                name: name,
                email: email,
                password: password,
                role: role,
            });
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: compte,
                redirect: "follow",
            };

            fetch("http://localhost:8081/register", requestOptions);
            navigateToHome();
            setValidated(true);
        };
        
    }



    return (
        <div>
            <div className={styles[`cont`]}>
                <div className={styles[`cont-item`]}>
                    <div className={styles[`img-cont`]}>
                        <img src={image} className={styles[`img1`]} />
                    </div>
                </div>
                <div className={styles[`cont-item`]}>
                    <div className={styles[`text-cont`]}>
                        <h2>
                            Sign Up
                        </h2>
                        <p className={styles[`text1`]}>Welcome Back.<p className={styles[`text1`]}>Please Enter Your Details</p></p>
                        <Form onSubmit={handleSubmit}
                            noValidate
                            validated={validated}>


                            <Form.Group
                                as={Col}
                                md="8"
                                controlId="validationCustom01"
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                                <p>Full name:</p>
                                <Form.Control required type="text" placeholder="full name" />
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="8"
                                controlId="formBasicEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                                <p>Email :</p>
                                <Form.Control required type="email" placeholder="Example@gmail.com" />
                                <Form.Control.Feedback type="invalid">
                                    Entrer mail valide.
                                </Form.Control.Feedback>
                                {mailerror === "true" ? (
                                    <p className="error"> email déja existe !</p>
                                ) : (
                                    <></>
                                )}
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="8"
                                value={password}
                                controlId="formBasicPassword"
                                onChange={(e) => setPassword(e.target.value)}>
                                <p>Password :</p>
                                <Form.Control required type="password" placeholder="password" />
                                <Form.Control.Feedback type="invalid">
                                    Entrer mot de passe valide.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <Button className={styles[`btn`]} type="submit" onClick={handleSubmit}>
                            Sign Up
                            
                        </Button>

                        <div className={styles[`logIn`]}>
                            <p className={styles[`text1`]}>Do you have an account?</p>
                            <a href='/LogIn'>Log In</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;
