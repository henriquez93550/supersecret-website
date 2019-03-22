import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { styles } from "../../utils";

export default class NavbarLinks extends Component {
  // the top links in navbar
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "game"
      },
      {
        id: 1,
        path: "/heroes/",
        name: "heroes"
      },
      {
        id: 2,
        path: "/academy/",
        name: "academy"
      },
      {
        id: 3,
        path: "/community/",
        name: "community"
      },
      {
        id: 4,
        path: "/store/",
        name: "store"
      }
    ]
  };
  render() {
    // navbarOpencomes is a method from Navbar js
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "180px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "0.5s" })};
  /* media query for aligning links for desktop viewing  */
  @media (min-width: 768px) {
    height: auto; /*  allows to see the links even if hamburger is not pressed */
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
