import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "@components/Navigation"

import { rhythm, scale } from "@utils/typography"
import { colors } from "@constants/index"
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

const MainContainer = styled.div`
  flex: 1;
  padding: 0;
  margin-top: ${props => props.theme.rhythm(1.25)};

  main {
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: ${props => props.theme.rhythm(40)};
    padding: 0 ${props => props.theme.rhythm(0.5)};
  }
`

class Layout extends React.Component<ILayout, {}> {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <HeaderContainer>
            <Navigation />
          </HeaderContainer>
          <MainContainer>
            <main>{children}</main>
          </MainContainer>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
