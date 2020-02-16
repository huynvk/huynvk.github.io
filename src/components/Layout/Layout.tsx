import React, { useState, useRef } from "react"
import { useOnClickOutside } from "@utils/hook"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "@components/Navigation"

import { rhythm, scale } from "@utils/typography"
import { colors } from "@constants/index"
import { screenSizes } from "@styles/config.screensizes.js"
import "./Layout.css"

interface ILayout {
  location: ILocation
  children: any
}

const theme = {
  rhythm,
  scale,
  colors,
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => props.theme.colors.mainBackground};
`

const HeaderContainer = styled.div``

const FooterContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  font-size: 0.7rem;
  padding-left: 0.5rem;

  @media ${screenSizes.mediumUp} {
    padding-left: 2rem;
  }
`

const MainContainer = styled.div`
  flex: 1;
  padding: 0;
  margin-top: ${props => props.theme.rhythm(1.25)};

  main {
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: ${props => props.theme.rhythm(25)};
    padding: 0 ${props => props.theme.rhythm(0.5)};
  }
`

function Layout({ children, noMenuBackground, noNavigation }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef(null)
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <HeaderContainer>
          {!noNavigation && (
            <Navigation
              ref={node}
              open={menuOpen}
              onToggleMenu={() => setMenuOpen(!menuOpen)}
              noBackground={noMenuBackground}
            />
          )}
        </HeaderContainer>
        <MainContainer>
          <main>{children}</main>
        </MainContainer>
        <FooterContainer>
          © copyright Ngo Viet Khanh Huy, 2019
        </FooterContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default Layout
