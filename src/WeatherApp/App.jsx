import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WeatherApp from "./WeatherApp";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
const App = () => {
  return (
    <>
      <Header />
      <WeatherApp />
      <Footer />
    </>
  );
};

export default App;
