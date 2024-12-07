import React from "react";
import Header from "../components/header";
import Features from "../components/features";
import CurrentEvents from "../components/currentEvents";
import About from "../components/about";
import Booking from "../components/booking";
import FAQ from "../components/faq";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Features />
      <CurrentEvents />
      <About />
      <Booking />
      <FAQ />
    </div>
  );
}

export default Home;
