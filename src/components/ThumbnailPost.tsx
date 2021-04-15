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

const ThumbnailContainer = styled.div`
  width: 100%;
  padding-bottom: 60%;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute !important;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: #fff;
  border-radius: 0.2rem;
  padding-bottom: 0.5rem;
  box-shadow: 5px 10px 5px #ddd;

  .content {
    padding: 0 0.5rem;
  }

  h2 {
    font-weight: 500;
    margin-top: 0.8rem;
    color: #253873;
  }

  .info {
    margin-bottom: 0.3rem;
  }

  .description {
    display: none;
  }

  a {
    text-shadow: none;
    background-image: none;
  }

  :hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
    }
  }

  @media only screen and (min-width: 767px) {
    width: 32%;
    margin-bottom: 0.5rem;

    h2 {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }

    .info {
      font-size: 0.4rem;
      margin-botton: 0;
    }

    .description {
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
`

const ThumbnailPost = (props: IProps) => {
  const { slug, heroImage, title, description, publishDate } = props

  return (
    <StyledContainer>
      <Link to={`/blog/${slug}`}>
        <ThumbnailContainer>
          <Image sizes={heroImage.fluid} alt="" />
        </ThumbnailContainer>
        <div className="content">
          <h2>{title}</h2>
          <div className="info">{publishDate}</div>
          <p className="description">{description}</p>
        </div>
      </Link>
    </StyledContainer>
  )
}

export default ThumbnailPost
