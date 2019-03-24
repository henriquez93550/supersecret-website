import React, { Component } from "react";
import Footer from ".././components/Footer";
import img from "../images/arcade.jpg";
import { Link } from "react-router-dom";
import { HomeHeader, Banner, BannerButton } from "../utils";
import Summary from "../components/Summary";
import Testimonial from "../components/Testimonials";

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader img={img}>
          <Banner title="Batman" subtitle="Discover what you can be">
            <Link to="/heroes" style={{ textDecoration: "none" }}>
              <BannerButton style={{ margin: "2rem auto" }}>
                Heroes
              </BannerButton>
            </Link>
          </Banner>
        </HomeHeader>
        <Summary />
        <Testimonial />

        <Footer />
      </React.Fragment>
    );
  }
}
