import React from "react"
import styled from "styled-components"
import { screenSizes } from "@styles/config.screensizes.js"

const MenuContainer = styled.div`
  position: relative;
`

const HamburgerButton = styled.div`
  position: absolute;
  left: 0.5rem;
  top: -0.5rem;
  display: flex;
  height: 1rem;
  width: 1rem;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;

  @media ${screenSizes.mediumUp} {
    display: none;
  }

  span {
    display: block;
    height: 0.15rem;
    width: 1rem;
    border-radius: 1rem;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuPanel = styled.div`
  position: absolute;
  padding-top: 3rem;
  top: -1.5rem;
  height: 100vh;
  width: 20rem;
  background-color: #707a9e;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${screenSizes.mediumUp} {
    transform: none;
    position: relative;
    display: flex;
    top: unset;
    height: 2rem;
    width: unset;
    padding-top: 0;
    transition: none;
    background-color: var(--colorWhite);
    flex-direction: row;
  }
`

function HamburgerMenu({ open, onToggleMenu, children }) {
  return (
    <MenuContainer>
      <MenuPanel open={open}>{children}</MenuPanel>
      <HamburgerButton open={open} onClick={() => onToggleMenu(!open)}>
        <span />
        <span />
        <span />
      </HamburgerButton>
    </MenuContainer>
  )
}

export default HamburgerMenu
