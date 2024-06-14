import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const page = () => {
  const header_text = `Hello I'm Lubna
  <br />
  Frontend SDE`;
  return (
    <>
      <Navbar />
      <Header header_text={header_text} />
      <Main />
      <Projects />
      <Footer />
    </>
  );
};

export default page;
