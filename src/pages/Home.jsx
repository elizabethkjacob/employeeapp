import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";
import { Image } from "@mui/icons-material";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Spicy-world</h1>
          <p>Spice Of Kerala</p>
          <Link to="/menu">
            
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
