import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <main className="row">
      <NavBar />
      <Banner />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  </>
  )
}

export default App;
