import React from 'react';
import form from '../images/Checklist.jpg';
import styles from './addCourse.module.css';
import { Button, Form } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import data from '../Data/University.json'
const AddCourse = () => {



    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "1%" }} >
                Add Course:
                <div className={styles[`line`]}></div>
            </h1>
            <div className={styles[`cont`]}>
                <div className={styles[`cont-img`]}>
                    <img src={form} />
                </div>
                <Form >
                <Form.Group
                        as={Col}
                        md="8"
                        controlId="university"
                    //onChange={(e) => setPassword(e.target.value)} 
                    >
                        <p>University :</p>
                        <Form.Select  defaultValue={null} aria-activedescendant='on'>
                            <option value={null}>Choose...</option>
                        {data.map(item => {
                            return (
                                
                                <option value={item[`university`]}>{item[`university`]}</option>
                            );})}
                        </Form.Select> 
                         
                    </Form.Group>
                    
                    <Form.Group
                        as={Col}
                        md="8"
                        controlId="name"
                    >
                        <p>Name of course :</p>
                        <Form.Control required type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="8"
                        controlId="details"

                    // onChange={(e) => setEmail(e.target.value)}
                    >
                        <p>Details :</p>
                        <Form.Control required type="text" placeholder="Details" />
                        <Form.Control.Feedback type="invalid">
                            details invalid.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    
                    <Button className={styles[`btn`]} type="submit" > Add </Button>
                </Form>

            </div>
        </div>
    );
}

export default AddCourse;
