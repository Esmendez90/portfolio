import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import CardComp from "../../components/Card/Card";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Banner/>
      <CardComp />
      <Footer />
    </>
  );
}

export default Home;
