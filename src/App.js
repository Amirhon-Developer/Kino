import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import About from "./pages/About";
import Trailor from "./pages/Trailor"
import Movies from "../src/pages/Movies"
import Contact from "../src/pages/Contact"
import Params from "../src/components/cards/Params"
import Admin from "../src/Admin/Admin-jsx/Post"
import firebase from '../src/firebase/config'
import Login from "./pages/Login/Login";


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      {loading ? (
        <CircleLoader
          color={"rgb(193, 27, 27)"}
          loading={loading}
          size={150}
          className="loading"
        />
      ) : (
        <>
          <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Login />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/trailor" element={<Trailor />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/card/:id' element={<Params/>}/>
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
