import React, { useState } from 'react';
import styles from './signUp.module.css';
import image from './images/Community.png'
import { Button } from 'react-bootstrap';
import Footer from './Footer';
const SignUp = () => {

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
                        <form>
                            <p>Email :</p>
                            <input type="email" />
                            <p>Password :</p>
                            <input type="password" />
                            <p>Confirm password :</p>
                            <input type="password" />

                        </form>
                        <button className={styles[`btn`]}> Sign Up </button>
                        <div className={styles[`logIn`]}>
                            <p className={styles[`text1`]}>Do you have an account?</p>
                            <a href='/'>Log In</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SignUp;
