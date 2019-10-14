import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { routeConstants } from "@constants/index"

const StyledContainer = styled.footer`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.rhythm(40)};
  padding: 0 ${props => props.theme.rhythm(0.5)};

  .inner-container {
    padding: ${props => props.theme.rhythm(1.25)} 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .menu {
    text-align: right;
  }

  .item {
    color: ${props => props.theme.colors.gray500};

    &:first-child {
      margin-left: ${props => props.theme.rhythm(1.25)};
    }
  }

  .dot-divider {
    color: ${props => props.theme.colors.gray500};
    padding: 0 ${props => props.theme.rhythm(0.25)};
  }

  @media only screen and (max-width: 767px) {
    .menu {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .item {
      &:first-child {
        margin-left: 0;
      }

      line-height: ${props => props.theme.rhythm(1.55)};
    }

    .dot-divider {
      display: none;
    }
  }
`

const Footer = () => (
  <StyledContainer>
    <div className="inner-container">
      <div className="menu">
        <Link to={routeConstants.home.path} className="item">
          About Mr Leo
        </Link>
        <span className="dot-divider">&middot;</span>
        <Link to={routeConstants.home.path} className="item">
          Latest Stories
        </Link>
        <span className="dot-divider">&middot;</span>
        <Link to={routeConstants.home.path} className="item">
          Contact
        </Link>
      </div>
    </div>
  </StyledContainer>
)

export default Footer
