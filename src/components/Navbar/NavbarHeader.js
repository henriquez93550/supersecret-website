import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/batman.svg";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../utils";

export default class NavHeader extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <div className="resize">
            <img src={logo} alt="company name" />
          </div>
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  .resize {
    height: 10%;
    width: 10%;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
