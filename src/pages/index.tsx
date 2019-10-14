import React from "react"
import styled from "styled-components"

import Layout from "@components/Layout"
import FeaturedPost from "@components/FeaturedPost"
import ThumbnailPost from "@components/ThumbnailPost"
import Footer from "@components/Footer"

import exampleImage1 from "../../static/featured-example.jpeg"
import exampleImage2 from "../../static/featured-example.jpeg"
import exampleImage3 from "../../static/featured-example.jpeg"

interface IProps {
  location: ILocation
}

interface IPost {
  title: string
  slug: string
  publishedDate: string
  description: string
  heroImage: string
}

const StyledContainer = styled.div`
  .thumbnail-post-container {
    display: flex;
    margin-bottom: ${props => props.theme.rhythm(1.25)};
  }

  @media only screen and (max-width: 767px) {
    .thumbnail-post-container {
      display: block;
    }
  }
`

class HomePage extends React.Component<IProps, {}> {
  render() {
    const recentPosts = [
      {
        title: "Dealing with Timezone and Moment.js handling",
        slug: "dealing-with-timezone-and-moment-handling",
        publishedDate: "Dec 22, 2018",
        description:
          "You’re a good developer. You and your nice team are producing useful features for your clients.",
        heroImage: exampleImage1,
      },
      {
        title: "Dockerize NodeJS application (Part 7 — Final)",
        slug: "dockerize-nodejs-application-part-7-final",
        publishedDate: "Dec 16, 2018",
        description:
          "This post in one of part in my series about Building real APIs with NodeJS for beginners. All main contents in this series in case we want to navigate quickly.",
        heroImage: exampleImage2,
      },
      {
        title: "Writing Unit test for API NodeJS by Jest framework (Part 6)",
        slug: "writing-unit-test-for-api-nodejs-by-jest-framework-part-6",
        publishedDate: "Dec 12, 2018",
        description:
          "When I investigated how to write unit tests for API in NodeJS, most of the articles I found that mention how to implement with Mocha, Chai, istanbul, etc…",
        heroImage: exampleImage3,
      },
    ]

    return (
      <Layout location={this.props.location}>
        <StyledContainer>
          <FeaturedPost />
          <div className="thumbnail-post-container">
            {recentPosts.map((post: IPost) => (
              <ThumbnailPost
                title={post.title}
                slug={post.slug}
                publishedDate={post.publishedDate}
                description={post.description}
                heroImage={post.heroImage}
              />
            ))}
          </div>
          <div className="thumbnail-post-container">
            {recentPosts.map((post: IPost) => (
              <ThumbnailPost
                title={post.title}
                slug={post.slug}
                publishedDate={post.publishedDate}
                description={post.description}
                heroImage={post.heroImage}
              />
            ))}
          </div>
          <Footer />
        </StyledContainer>
      </Layout>
    )
  }
}

export default HomePage
