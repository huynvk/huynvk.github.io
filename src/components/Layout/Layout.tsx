import React, { useState, useRef } from "react"
import { useOnClickOutside } from "@utils/hook"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "@components/Navigation"
import SEO from "@components/SEO"
import { rhythm, scale } from "@utils/typography"
import { colors } from "@constants/index"
import { screenSizes } from "@styles/config.screensizes.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import "./Layout.css"

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
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;

  @media ${screenSizes.mediumUp} {
    padding-left: 2rem;
    padding-right: 2rem;
    flex-direction: row;
    justify-content: space-between;
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

const Refs = styled.div`
  a + a {
    padding-left: 0.5rem;
  }
`

const Ref = styled.a`
  &:hover {
    color: #4b71e7;
    cursor: pointer;
  }
`

const Copyright = styled.div`
  line-height: 1.5rem;
  margin-bottom: 0.5rem;

  @media ${screenSizes.mediumUp} {
    margin-bottom: 0;
  }
`

function Layout({ children, noMenuBackground, noNavigation, seoProps }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef(null)
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <SEO {...seoProps}>
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
            <Copyright>© copyright Ngo Viet Khanh Huy, 2019</Copyright>
            <Refs>
              <Ref
                href="mailto:huynvk@gmail.com"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Ref>
              <Ref
                href="https://github.com/huynvk"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Ref>
              <Ref
                href="https://stackoverflow.com/users/6601687/huy-ngo"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </Ref>
              <Ref
                href="https://www.linkedin.com/in/huynvk/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Ref>
              <Ref
                href="https://www.facebook.com/huynvk"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </Ref>
              <Ref
                href="https://twitter.com/huynvk"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Ref>
            </Refs>
          </FooterContainer>
        </AppContainer>
      </ThemeProvider>
    </SEO>
  )
}

export default Layout
