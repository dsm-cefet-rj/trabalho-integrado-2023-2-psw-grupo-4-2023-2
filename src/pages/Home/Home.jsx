import React from "react";
import HeaderVariant1 from "../../components/Header/indexVariant1";
import MainVariant1 from "../../components/Main/MainVariant1";
import Footer from "../../components/Footer/index";
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="home">
      <HeaderVariant1 />
      <MainVariant1 />
      <Footer />
    </div>
  );
};

export default Home;
