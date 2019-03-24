import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import img from "../images/controller.jpg";
import img2 from "../images/keyboard.jpg";
import { styles } from "../utils";

export default class Testimonials extends Component {
  render() {
    return (
      <TestimonialsWrapper>
        {" "}
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
        >
          <Page>
            <div className="item">
              <p className="title">Enter a new world</p>
              <p className="subtitle">Discover if you dare</p>
              <img className="infopic" src={img} alt="controller" />
            </div>
          </Page>
          <Page>
            <div className="item">
              <p className="title">Enter a new world</p>
              <p className="subtitle">Discover if you dare</p>
              <img className="infopic" src={img2} alt="computer" />
            </div>
          </Page>
        </Slider>
      </TestimonialsWrapper>
    );
  }
}

const TestimonialsWrapper = styled.div`
  width: 100%;
  padding-bottom: 32px;
  background: coral;
  background-image: cover;
  .title {
    color: white;
    position: absolute;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    padding: 0.1rem 0.3rem;
    width: 100%;
  }
  .subtitle {
    position: absolute;
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted}
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    width: 100%;
    padding: 0.2rem 0.4rem;
  }
  .item {
    position: relative;
  }
  .infopic {
    background: linear-gradient(rgba(0, 0, 0, 0.4));
  }
`;

const Page = styled.div`
  width: 100%;
`;
