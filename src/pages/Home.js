import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/piza1.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Giovanni's Pizza</h1>
          <p>Mamma Mia! </p>
          <Link to="/menu">
            <button> MENU </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
