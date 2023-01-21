import React from "react";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="dashboard__header section__padding" id="home">
      <div className="dashboard__header-content">
        <h1 className="gradient__text" id="h1">
          VISUALIZE
        </h1>
        <h2 className="gradient__text">Like You Never Have Before</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          recusandae, beatae earum, repellat dolorem corrupti quas pariatur
          dolorum quos deserunt id cupiditate repellendus! Veniam non magnam
          laudantium minima inventore harum! Accusantium, ipsam. Non iusto id
          molestias harum vero doloribus.
        </p>
        <div className="dashboard__header-content__input">
          <input type="email" placeholder="your email address" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="dashboard__header-image">
        <img src={ai} alt="future image" />
      </div>
    </div>
  );
};

export default Header;
