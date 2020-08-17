import React from "react"
import styled from "styled-components"
import { screenSizes } from "@styles/config.screensizes.js"

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 1040px;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    width: 3.2rem;
    margin-right: 1rem;
    margin-bottom: 0.3rem;
  }

  @media ${screenSizes.mediumUp} {
    margin-left: auto;
    margin-right: auto;
  }
`

const Text = styled.div`
  color: #404040;
`

const Name = styled.div`
  font-size: 1.5rem;
  font-family: "Teko";
  text-transform: uppercase;
`

const Copyright = styled.div``

export default () => (
  <div>
    <Container>
      <img src="icon.png" alt="icon" />
      <Text>
        <Name>Huy Ngo</Name>
        <Copyright>2020 © Ngo Viet Khanh Huy. All right reserved.</Copyright>
      </Text>
    </Container>
  </div>
)
