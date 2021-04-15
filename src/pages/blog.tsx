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
  height: 2.5rem;
  display: flex;
  flex-direction: row;

  span {
    flex: 1;
    border-bottom: 3px solid #ccc;
  }

  @media only screen and (min-width: 767px) {
    height: 2.5rem;
  }
`

const Toogle = styled.a`
  padding: 0.25rem 0.5rem;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.isSelected ? "#f5a623" : "#ccc")};
  cursor: ${props => (props.isSelected ? "default" : "pointer")};

  &:hover {
    color: ${props => (props.isSelected ? "unset" : "#f5a623")};
  }
`

type Filter = "All" | "Tiếng Việt" | "English"
const allFilters = ["English", "Tiếng Việt", "All"]

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
    <span />
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
    filter: "English" as Filter,
  }

  render() {
    const posts = get(this, "props.data.allPosts.edges").map(
      (item: { node: IPost }) => item.node
    )

    return (
      <Layout
        seoProps={{ title: "Huy Ngo Personal Blog | Programming and Life" }}
        mainBackground="#eee"
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
