import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactDOM from 'react-dom';
import WelcomePage from "./components/Welcome";
import Courses from './components/Courses'
import React from 'react';
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import logIn from "./components/LogIn";
import Course from "./components/Course"
import AddCourse from "./components/AddCourse";
export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Add" component={AddCourse} />
            <Route exact path="/Course/:id" component={Course}/>
            <Route exact path="/About" component={AboutUs} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={logIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}



