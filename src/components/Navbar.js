import React, { useContext, useState, useEffect } from "react";
import navbar from "./navbar.module.css";
import { IoMdBook, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const active = true;

  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [Show, SetShow] = useState(true);
  const navigate = useHistory();

  let name = user && user[`name`].toUpperCase();
  let role = user && user[`role`];

  function stringToColor(string) {
    let hash = 0;
    let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const handleClick =()=>{
  navigate.push("/Profil")
}
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
          <>
            <Link to="/MyListe">
              <li className={navbar.item}>My liste</li>
            </Link>
            <Link to="/Add">
              <li className={navbar.item}>Add Course</li>
            </Link>
          </>
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
        <div> 
          <IconButton  onClick={handleClick} sx={{ p: 0 }}>
            <Avatar {...stringAvatar(name)} />
          </IconButton>

          <Link to={"/"}>
            <IoMdLogOut
              onClick={() => {
                setUser(null);
              }}
              className={navbar.logOut}
            />
          </Link>
        </div>
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
