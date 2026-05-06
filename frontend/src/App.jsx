import { useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Sections/NewArrivals";
import "react-multi-carousel/lib/styles.css";

function App() {
  return <>
    <Navigation/>
    <HeroSection/>
    <NewArrivals/>
  </>
}

export default App;
