import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Works from "./components/Works/Works";

function App() {
  return (
    <>
    <main className="row">
      <Header />
      <Banner />
      <About />
      <Works />
    
    </main>
  </>
  )
}

export default App;
