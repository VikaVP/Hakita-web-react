import React from "react";
import "../App.css";
import Navbars from "../components/Navbar";
import HomeComponent from "../components/Home";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbars />
      <HomeComponent />
      <Product />
      <Footer />
    </>
  );
}
export default Home;
