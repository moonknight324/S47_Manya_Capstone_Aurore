import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MarsRover from "./FetchedData/MarsRover";
import APOD from "./FetchedData/APOD";
import HomePage from "./Pages/HomePage";
import Articles from "./FetchedData/Articles";
import ISROLaunches from "./FetchedData/ISROLaunches";
import Blogs from "./FetchedData/Blogs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/marsrover" element={<MarsRover />}></Route>
        <Route path="/apod" element={<APOD />}></Route>
        <Route path="/isro-launches" element={<ISROLaunches />} />
        <Route path="/articles" element={<Articles />}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
    </>
  );
}

export default App;
