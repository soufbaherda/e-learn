import React, { useState ,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './logIn.module.css';
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import image from '../images/Community.png'
import { Button } from 'react-bootstrap';
import { Link } from '@mui/material';
import { UserContext } from './UserContext';
const LogIn = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [id, setid] = useState(0);
    const [password, setPassword] = useState("");
    const {user, setUser} =useContext(UserContext);
   
    //link to home 
    const navigate = useHistory();
    function navigateToHome() {
        navigate.push("/");
      }
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        var compte = JSON.stringify({
            "email": email,
            "password": password,
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: compte,
            redirect: 'follow'
        };
        fetch("http://localhost:8081/login", requestOptions)
            .then(response => response.json())
            .then(data => { setid(data.id);
                            setUser(data)});
       if(id!==0 && id!==0){
            navigate.push("/");
       }
    };

    return (
        <div>
            <div className={styles[`cont`]} >
                <div className={styles[`cont-item`]}>
                    <div className={styles[`img-cont`]}>
                        <img src={image} className={styles[`img1`]} />
                    </div>
                </div>
                <div className={styles[`cont-item`]}>
                    <div className={styles[`text-cont`]} >
                        <h2>
                            Log In
                        </h2>
                        <p className={styles[`text1`]}>Welcome Back.<p className={styles[`text1`]}>Please Enter Your Details</p></p>

                        <Form className="form" 
                        noValidate 
                        validated={validated} >
                            <Form.Group as={Col} md="8" controlId="formBasicEmail" onChange={(e) => setEmail(e.target.value)} >
                                <p>Email :</p>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Example@gmail.com"s
                                />
                                
                            </Form.Group>

                            <Form.Group as={Col} md="8" controlId="formBasicPassword" onChange={(e) => setPassword(e.target.value)} >
                                <p>Password :</p>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="password"

                                />
                                
                            </Form.Group>
                        </Form>
                        <Button className={styles[`btn`]} type ="submit" onClick={handleSubmit }> Log In </Button>
                                {id === -1 ? (
                                    <p className="error">incorrect password</p>
                                ) : (
                                    <></>
                                )}
                        <div className={styles[`logIn`]}>
                            <p className={styles[`text1`]}>Don't you have an account?</p>
                            <a href='/SignUp'>Sign Up </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LogIn;
