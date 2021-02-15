import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

interface IProps {
  title: string
  slug: string
  publishDate: string
  description: string
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
  width: 33.3333%;

  article {
    padding-right: ${props => props.theme.rhythm(1)};
    margin-bottom: 1rem;

    .thumb {
      img {
        height: ${props => props.theme.rhythm(8)};
        border: 1px solid rgba(0, 0, 0, 0.15);
        width: 100%;
      }
    }

    .content {
      padding: 0 ${props => props.theme.rhythm(0.5)} 0 0;

      h2 {
        margin-top: 1rem;
      }
    }

    .description,
    .info {
      color: ${props => props.theme.colors.gray500};
      margin-top: 0;
    }

    .info {
      ${props => ({ ...props.theme.scale(-0.5) })}
    }
  }

  a {
    text-shadow: none;
    background-image: none;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;

    article {
      display: block;
      padding-right: 0;

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
        margin-bottom: ${props => props.theme.rhythm(1.25)};
      }
    }
  }
`

const ThumbnailPost = (props: IProps) => {
  const { slug, heroImage, title, description, publishDate } = props

  return (
    <StyledContainer>
      <article>
        <Link to={`/blog/${slug}`}>
          <div className="thumb">
            <Image sizes={heroImage.fluid} alt="" />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <div className="info">{publishDate}</div>
            <p className="description">{description}</p>
          </div>
        </Link>
      </article>
    </StyledContainer>
  )
}

export default ThumbnailPost
