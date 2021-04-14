import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "@components/Layout"
import FeaturedPost from "@components/FeaturedPost"
import ThumbnailPost from "@components/ThumbnailPost"

interface IProps {
  location: ILocation
}

interface IPost {
  title: string
  slug: string
  publishDate: string
  description: string
  isVietnamese: boolean
  heroImage: {
    fluid: {
      aspectRatio: number
      src: string
      srcSet: string
      sizes: string
    }
  }
}

const StyledContainer = styled.div`
  .featured-post-container {
    margin-bottom: ${props => props.theme.rhythm(1.25)};
  }

  .thumbnail-post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const ToggleContainer = styled.div`
  margin-bottom: 2rem;
`

const Toogle = styled.a`
  color: ${props => (props.isSelected ? "#fff" : "#000")};
  background-color: ${props => (props.isSelected ? "#f5a623" : "#fff")};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #c78c2a;
  }
`

type Filter = "All" | "Tiếng Việt" | "English"
const allFilters = ["All", "Tiếng Việt", "English"]

const LanguageToggle = ({ selectedFilter, onSelected }) => (
  <ToggleContainer>
    {allFilters.map(filter => (
      <Toogle
        isSelected={filter === selectedFilter}
        onClick={() => onSelected(filter)}
      >
        {filter}
      </Toogle>
    ))}
  </ToggleContainer>
)

const shouldDisplayPost = (isVietnamese: Boolean, filter: Filter) => {
  if (filter === "All") {
    return true
  }

  return (
    (filter === "Tiếng Việt" && isVietnamese) ||
    (filter === "English" && !isVietnamese)
  )
}

class HomePage extends React.Component<IProps, {}> {
  state = {
    filter: "All" as Filter,
  }

  render() {
    const posts = get(this, "props.data.allPosts.edges").map(
      (item: { node: IPost }) => item.node
    )

    return (
      <Layout
        seoProps={{ title: "Huy Ngo Personal Blog | Programming and Life" }}
      >
        <StyledContainer>
          <LanguageToggle
            selectedFilter={this.state.filter}
            onSelected={value => this.setState({ filter: value })}
          />
          <div className="thumbnail-post-container">
            {posts.map((post: IPost) => {
              return (
                shouldDisplayPost(post.isVietnamese, this.state.filter) && (
                  <ThumbnailPost
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    publishDate={post.publishDate}
                    description={post.description}
                    heroImage={post.heroImage}
                  />
                )
              )
            })}
          </div>
        </StyledContainer>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    allPosts: allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          description
          heroImage {
            fluid {
              sizes
              aspectRatio
              src
              srcSet
            }
          }
          slug
          publishDate(formatString: "MMM DD, YYYY")
          isVietnamese
        }
      }
    }
  }
`
