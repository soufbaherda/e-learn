import { useMemo, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/Welcome";
import Courses from "./components/Courses";
import React from "react";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import logIn from "./components/LogIn";
import Course from "./components/Course";
import AddCourse from "./components/AddCourse";
import MyListe from "./components/MyListe";
import { UserContext } from "./components/UserContext";
import CourseInscrit from "./components/CourseInscrit";
<<<<<<< HEAD
import Profil from "./components/Profil";
=======
import CourseAjoute from "./components/CourseAjoute";
import CourseEdit from "./components/CourseEdit";
>>>>>>> 89d961c03f5d9c504e91e1f310e5c140b2e049d8
export default function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Myliste" component={MyListe} />
            <Route exact path="/Add" component={AddCourse} />
            <Route
              exact
              path="/Course/:id"
              component={user?.role === "etudiant" ? Course : Courses}
            />
            <Route exact path="/Course/Edit/:id" component={CourseAjoute} />
            <Route
              exact
              path="/Course/:id/inscription"
              component={CourseInscrit}
            />
            <Route
              exact
              path="/Course/Edit/:id/modifier"
              component={CourseEdit}
            />
            <Route exact path="/About" component={AboutUs} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Profil" component={Profil} />
            <Route exact path="/LogIn" component={logIn} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
