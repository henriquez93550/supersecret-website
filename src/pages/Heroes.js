import React, { Component } from "react";
import { PageHeader, Banner } from "../utils";
import blackImg from "../images/blacknwhitekey.jpg";

export default class Heroes extends Component {
  render() {
    return (
      <PageHeader img={blackImg}>
        <Banner title="Heroes" subtitle="Select your champion" />
      </PageHeader>
    );
  }
}
