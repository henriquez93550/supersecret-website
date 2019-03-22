import styled from "styled-components";
import React from "react";
import img from "../images/homeBcg.jpeg";

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>;
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>;
}

const IndexHeader = styled.header`
  min-height: calc(
    100vh - 54.78px
  ); /* px are found inspecting chrome dev tools */
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// passes everything except for the height
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`;

// makes sure the image is set as default just in case
HomeHeader.defaultProps = {
  img: img
};
PageHeader.defaultProps = {
  img: img
};

export { HomeHeader, PageHeader };
