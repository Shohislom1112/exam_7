import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dishes from "./pages/dishes/Dishes";
import DishDetails from "./pages/dishdetails/DishDetails";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import Header from "./Components/header/Header";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Shop from "./pages/Shop/Shop";
// import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/dishdetails" element={<DishDetails />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
      </div>
    </div>
  );
};

export default App;
