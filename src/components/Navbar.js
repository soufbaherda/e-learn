import React, { useContext, useState, useEffect } from "react";
import navbar from "./navbar.module.css";
import { IoMdBook, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";

const Navbar = () => {
  const active = true;

  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [Show, SetShow] = useState(true);
  let name = user && user[`name`].toUpperCase();
  let role = user && user[`role`];

  return (
    <div className={navbar.navbar}>
      <div className={navbar.container}>
        <div className={navbar.logoContainer}>
          <Link to="/">
            <IoMdBook className={navbar.logo} />
          </Link>
          <h2>
            E<span className={navbar.act}>-</span>Learn
          </h2>
        </div>

        <ul className={navbar.links}>
          <Link to="/Courses">
            <li className={navbar.item}>Courses</li>
          </Link>
          {role === "etudiant" ? (
            <Link to="/MyListe">
              <li className={navbar.item}>My liste</li>
            </Link>
          ) : (
            true
          )}
          {role === "enseignant" ? (
            <Link to="/Add">
              <li className={navbar.item}>Add Course</li>
            </Link>
          ) : (
            true
          )}
          <Link to="/About">
            <li
              className={navbar.item}
              style={{ marginRight: "-20px", right: "0" }}
            >
              About Us
            </li>
          </Link>
        </ul>

        {role === "etudiant" || role === "enseignant" ? (
          <Link to={"/"}>
            <IoMdLogOut
              onClick={() => {
                setUser(null);
              }}
              className={navbar.logOut}
            />
          </Link>
        ) : (
          <div>
            <Link to="/SignUP">
              <a href="#" className={navbar.btn}>
                Sign Up
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
