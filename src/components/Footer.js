// @flow

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #4b71e7;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Text = styled.div`
  flex: 1;
`

const Links = styled.div``

const Footer = () => (
  <Container>
    <Text>Copyright shino.io © 2019</Text>
    <Links>
      <a href="#">f</a>
      <a href="#">email</a>
    </Links>
  </Container>
)

export default Footer
