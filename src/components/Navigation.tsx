import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { routeConstants } from "@constants/index"
import logo from "../../static/logo.png"

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.rhythm(40)};
  padding: 0 ${props => props.theme.rhythm(0.5)};

  .inner-container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: ${props => props.theme.rhythm(0.75)} 0;
  }

  a {
    text-decoration: none;
    background-image: none;
    text-shadow: none;
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
        <img src={logo} alt="Logo" width="198" height="76" />
      </Link>
    </div>
  </StyledContainer>
)

export default Navigation
