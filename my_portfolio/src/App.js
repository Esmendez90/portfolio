import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardComp from "./components/Card/Card";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <main className="row">
      <Header />
      <About />
      <Banner />
      <CardComp />
      <Footer />
    </main>
  </>
  )
}

export default App;
