import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";

function App() {
  return (
    <>
    <main className="row">
      <Header />
      <Banner />
      <About />
    
    </main>
  </>
  )
}

export default App;
