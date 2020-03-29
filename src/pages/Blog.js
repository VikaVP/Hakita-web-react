import React from "react";
import "../App.css";
import Navbars from "../components/Navbar";
import Blogs from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbars />
      <Blogs />
      <Footer />
    </>
  );
}
export default Home;
