import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

interface IProps {
  title: string
  slug: string
  publishDate: string
  // description: {
  //   description:
  // }
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

const FeaturedPost = (props: IProps) => {
  const { slug, heroImage, title, publishDate } = props

  return (
    <StyledContainer>
      <Link to={`/${slug}`}>
        <article>
          <div className="thumb">
            <Image sizes={heroImage.sizes} alt="" />
          </div>
          <div className="content">
            <h2>{title}</h2>
            {/* <p className="description">{description}</p> */}
            <div className="info">{publishDate}</div>
          </div>
        </article>
      </Link>
    </StyledContainer>
  )
}

export default FeaturedPost
