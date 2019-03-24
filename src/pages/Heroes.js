import React, { Component } from "react";
import { PageHeader, Banner } from "../utils";
import blackImg from "../images/blacknwhitekey.jpg";
import hero1 from "../images/hero1.jpg";
import hero2 from "../images/fluffybottom.jpg";
import hero3 from "../images/axdude.jpg";
import Footer from ".././components/Footer";
import styled from "styled-components";

export default class Heroes extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader img={blackImg}>
          <Banner title="Heroes" subtitle="Select your champion" />
        </PageHeader>
        <HeroesWrapper>
          <img className="hero" src={hero1} alt="cuddles" />
          <div className="heroContainer">
            <h2 className="name">Sergeant Cuddles</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              porro sint ducimus repudiandae sit modi obcaecati quis tempora
              officia laboriosam.
            </p>
          </div>
          <div className="heroContainer">
            <h2 className="name">Sir FluffyButts</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              porro sint ducimus repudiandae sit modi obcaecati quis tempora
              officia laboriosam.
            </p>
          </div>
          <img className="hero" src={hero2} alt="fluffybottom" />
          <img className="hero" src={hero3} alt="Loving Poof" />
          <div className="heroContainer">
            <h2 className="name">Loveable Poof</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              porro sint ducimus repudiandae sit modi obcaecati quis tempora
              officia laboriosam.
            </p>
          </div>
        </HeroesWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const HeroesWrapper = styled.div`
 display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}
  .hero {
    max-width: 400px;
  }
  
`;
