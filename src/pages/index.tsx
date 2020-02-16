import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "@components/Layout"
import FeaturedPost from "@components/FeaturedPost"
import ThumbnailPost from "@components/ThumbnailPost"
import SEO from "@components/SEO"

interface IProps {
  location: ILocation
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 510px;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 12rem;
`

const Name = styled.h1`
  margin-bottom: 0.2rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 1.8rem;
`

const Position = styled.div`
  text-align: center;

  a {
    color: #4B71E7;
  }
`

const Buttons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;

  a + a {
    margin-left: 1rem;
  }
`

const Button = styled.a`
  --color: ${props => props.revert ? "#fff" : "#4B71E7"};
  --background: ${props => props.revert ? "#4B71E7" : "#fff"};

  display: block;
  border: 1px solid #4B71E7;
  background-color: var(--background);
  border-radius: 0.5rem;
  color: var(--color);

  padding: 0.5rem 1rem;
`

class HomePage extends React.Component<IProps, {}> {
  render() {
    return (
      <Layout location={this.props.location} noMenuBackground noNavigation>
        <StyledContainer>
          <SEO title="Huy Ngo Personal Blog | Programming and Life" />
          <Avatar src="avatar.jpg" alt="avatar" />
          <Name>Ngô Việt Khánh Huy</Name>
          <Position>
            Technical Leader, Technical Advisor at{' '}
            <a href="https://www.codelink.io/" target="_blank"  rel="noopener noreferrer">Codelink</a>
          </Position>
          <Buttons>
            <Button href="mailto:huynvk@gmail.com" >Contact me</Button>
            <Button href="blog" revert>Blog posts</Button>
          </Buttons>
        </StyledContainer>
      </Layout>
    )
  }
}

export default HomePage
