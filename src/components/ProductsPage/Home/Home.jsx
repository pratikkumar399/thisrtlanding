import "./Home.css";
import tshirtImage from "../../../assets/home.jpg";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__shoe">
          <div className="home__shoe-bg"></div>
          <img src={tshirtImage} alt="tshirt image" className="home__shoe-img" />
        </div>

        <div className="home__text">
          <h2 className="home__title">TShirt SPLY-350</h2>
          <p className="home__description">
            T' SPLY-350 is a lightweight, breathable, comfortable tshirt. Go
            shop and see more tshirts like this. Add them to the cart and
            checkout.
          </p>

          <a href="#shop" className="btn home__btn">
            Go shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
