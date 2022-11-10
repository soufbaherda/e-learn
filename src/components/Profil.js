import {  Link } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from "./UserContext";
import styles from "./profil.module.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Profil = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    const [row, setRow] = useState([]);
    const [nameU, setNameU] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCPassword] = useState("");
    const navigate = useHistory()
    let id = user && user[`id`];
    let name = user && user[`name`]

    useEffect(() => {
        async function getUser() {
            const res = await fetch(`http://localhost:8081/users/${id}`);
            const data = await res.json();
            setRow(data);
            console.log(row)
            setNameU(data.name);
            setPassword(row.password);
        }
        getUser();
    }, []);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        
        if (form.checkValidity() === false || password !== Cpassword) {
            event.preventDefault();
            event.stopPropagation();
            alert("password don't match")
        }
        else {
            var compte = JSON.stringify({
                id: row.id,
                name: nameU,
                email: row.email,
                password: password,
                role: row.role,
            });
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: "PUT",
                headers: myHeaders,
                body: compte,
                redirect: "follow",
            };

            fetch("http://localhost:8081/update", requestOptions);

            navigate.push("/")
        }
    };
    return (
        <div className={styles.back}>
            <div className={styles.backProfil}>
                <figure className={styles.circle}><h2 className={styles.user1}>{name.split(' ')[0][0].toUpperCase()}{name.split(' ')[1][0].toUpperCase()}</h2></figure>
                <Form onSubmit={handleSubmit} 
                noValidate
                validated={password === Cpassword}>
                    <Form.Group
                        as={Col}
                        md="8"
                        value={nameU}
                        controlId="validationCustom01"
                        onChange={(e) => setNameU(e.target.value)}>
                        <p>Full name:</p>
                        <Form.Control required type="text" defaultValue={row.name} />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="8"
                        controlId="formBasicEmail"
                    >
                        <p>Email :</p>
                        <Form.Control required type="email" placeholder={row.email} disabled />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="8"
                        controlId="formBasicEmail"
                    >
                        <p>Rôle :</p>
                        <Form.Control required type="text" placeholder={row.role} disabled />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="8"
                        value={password}
                        controlId="formBasicPassword"
                        onChange={(e) => setPassword(e.target.value)}>
                        <p>New Password :</p>
                        <Form.Control required type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="8"
                        value={Cpassword}
                        controlId="formBasicPassword"
                        onChange={(e) => setCPassword(e.target.value)}>
                        <p>Confirmer New Password :</p>
                        <Form.Control required type="password" placeholder="confirm password" />
                        <Form.Control.Feedback type="invalid">
                            password don't match
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
                    <Button sx={{ my: 2, color: 'blue', display: 'block' }} onClick={handleSubmit}>
                        Modifier
                    </Button>
            </div>
        </div>
    );
}

export default Profil;
