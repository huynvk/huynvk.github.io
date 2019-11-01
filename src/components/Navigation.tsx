import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { routeConstants } from "@constants/index"
import { screenSizes } from "@styles/config.screensizes.js"
import Logo from "@components/Logo"
import HamburgerMenu from "@components/HamburgerMenu"

const StyledContainer = styled.div`
  contain: layout;
  pointer-events: none;
  position: fixed;
  top: 0;
  height: 2rem;
  width: 100%;
  z-index: 1000;
  background: #fff;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  flex-direction: row;
  align-items: center;
  display: flex;

  .inner-container {
    pointer-events: all;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    text-decoration: none;
    background-image: none;
    text-shadow: none;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  @media ${screenSizes.mediumUp} {
    a {
      margin-bottom: 0;
    }
  }

  img {
    margin-bottom: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 1rem;
  }
`

const MobileOnly = styled.div`
  display: inline-block;
  margin-left: 2rem;

  @media ${screenSizes.mediumUp} {
    display: none;
  }
`

const Navigation = React.forwardRef(({ open, onToggleMenu }, ref) => (
  <StyledContainer>
    <div ref={ref} className="inner-container">
      <HamburgerMenu open={open} onToggleMenu={onToggleMenu}>
        <Link to={routeConstants.home.path} className="logo">
          <Logo />
        </Link>
        <Link to={routeConstants.blog.path} className="logo">
          Blog
        </Link>
      </HamburgerMenu>
      <MobileOnly>
        <Logo />
      </MobileOnly>
    </div>
  </StyledContainer>
))

export default Navigation
