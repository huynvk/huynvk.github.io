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
  heroImage: {
    sizes: {
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
  }

  @media only screen and (max-width: 767px) {
    .thumbnail-post-container {
      display: block;
    }
  }
`

class HomePage extends React.Component<IProps, {}> {
  render() {
    const posts = get(this, "props.data.allPosts.edges").map(
      (item: { node: IPost }) => item.node
    )
    const featuredPost = posts.shift()

    return (
      <Layout location={this.props.location}>
        <StyledContainer>
          <div className="featured-post-container">
            <FeaturedPost
              title={featuredPost.title}
              slug={featuredPost.slug}
              publishDate={featuredPost.publishDate}
              // description={featuredPost.description}
              heroImage={featuredPost.heroImage}
            />
          </div>
          <div className="thumbnail-post-container">
            {posts.map((post: IPost) => (
              <ThumbnailPost
                key={post.slug}
                title={post.title}
                slug={post.slug}
                publishDate={post.publishDate}
                // description={post.description}
                heroImage={post.heroImage}
              />
            ))}
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
          body {
            body
          }
          description {
            description
          }
          heroImage {
            sizes(maxWidth: 663, maxHeight: 338, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          slug
          publishDate(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`
