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

const StyledContainer = styled.div``

class HomePage extends React.Component<IProps, {}> {
  render() {
    return (
      <Layout location={this.props.location} noMenuBackground>
        <StyledContainer>
          <SEO title="Huy Ngo Personal Blog | Programming and Life" />
          Greeting!
        </StyledContainer>
      </Layout>
    )
  }
}

export default HomePage
