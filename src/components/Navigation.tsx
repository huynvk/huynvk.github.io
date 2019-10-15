import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { routeConstants } from "@constants/index"
import logo from "../../static/logo.png"

const StyledContainer = styled.div`
  contain: layout;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  padding: 0 ${props => props.theme.rhythm(0.5)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);

  .inner-container {
    pointer-events: all;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  a {
    text-decoration: none;
    background-image: none;
    text-shadow: none;
    margin-right: 2rem;
  }

  img {
    margin-bottom: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    height: ${props => props.theme.rhythm(2.5)};
  }
`

const Navigation = () => (
  <StyledContainer>
    <div className="inner-container">
      <Link to={routeConstants.home.path} className="logo">
        Huy Ngo
      </Link>
      <Link to={routeConstants.blog.path} className="logo">
        Blog
      </Link>
    </div>
  </StyledContainer>
)

export default Navigation
