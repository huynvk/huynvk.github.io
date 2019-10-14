import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import exampleImage from "../../static/featured-example.jpeg"

const StyledContainer = styled.div`
  article {
    display: flex;

    .thumb {
      width: 66.66%;
      padding-right: ${props => props.theme.rhythm(0.5)};

      img {
        height: ${props => props.theme.rhythm(13)};
        width: 100%;
      }
    }

    .content {
      width: 33.34%;
      padding: 0 ${props => props.theme.rhythm(0.5)};
    }

    .description,
    .info {
      color: ${props => props.theme.colors.gray500};
    }
  }

  a {
    text-shadow: none;
    background-image: none;
  }

  @media only screen and (max-width: 767px) {
    article {
      display: block;

      .thumb {
        width: 100%;
        padding-right: 0;

        img {
          height: ${props => props.theme.rhythm(7)};
          width: 100%;
        }
      }

      .content {
        width: 100%;
        padding: 0;
      }
    }
  }
`

const FeaturedPost = () => {
  const title = "Convert flowed-project to Typescript"
  const slug = "convert-flowed-project-to-typescript"
  const heroImage = exampleImage
  const publishDate = "Jan 23, 2018"
  const description =
    "First, I do not recommend everyone to move to TypeScript. Who's being happy with Flow, it’s fine"

  return (
    <StyledContainer>
      <Link to={`/${slug}`}>
        <article>
          <div className="thumb">
            <img src={heroImage} alt="" />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <div className="info">{publishDate}</div>
          </div>
        </article>
      </Link>
    </StyledContainer>
  )
}

export default FeaturedPost
