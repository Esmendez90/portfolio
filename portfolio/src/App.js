import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
    <main className="row">
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Form />
      <Works />
      <Contact />
      <Footer />
    </main>
  </>
  )
}

export default App;
