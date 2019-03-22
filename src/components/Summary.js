import React, { Component } from "react";
import { Section, Title, SectionButton } from "../utils";
import styled from "styled-components";
import { styles } from "../utils";
import { Link } from "react-router-dom";
export default class Summary extends Component {
  render() {
    return (
      <Section>
        <Title message="Get ready to" title="Take on a mission" />
        <SummaryWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            maxime dignissimos? Laborum est provident magni tenetur dignissimos
            accusantium consectetur beatae. Et temporibus aliquam, harum
            quisquam quo tempore maxime, quos incidunt sunt ipsa sed,
            repellendus obcaecati ducimus blanditiis facere similique cum iusto!
            Velit, quisquam. Quam nemo sequi voluptatum sed labore obcaecati?
          </p>
          <Link to="/academy" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              academy
            </SectionButton>
          </Link>
        </SummaryWrapper>
      </Section>
    );
  }
}

const SummaryWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
`;
