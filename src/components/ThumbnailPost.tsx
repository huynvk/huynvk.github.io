import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface IProps {
  title: string
  slug: string
  publishedDate: string
  description: string
  heroImage: string
}

const StyledContainer = styled.div`
  width: 33.3333%;

  article {
    padding-right: ${props => props.theme.rhythm(1)};

    .thumb {
      img {
        height: ${props => props.theme.rhythm(8)};
        border: 1px solid rgba(0, 0, 0, 0.15);
        width: 100%;
      }
    }

    .content {
      padding: 0 ${props => props.theme.rhythm(0.5)} 0 0;
    }

    .description,
    .info {
      color: ${props => props.theme.colors.gray500};
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
  const { slug, heroImage, title, description, publishedDate } = props

  return (
    <StyledContainer>
      <article>
        <Link to={`/${slug}`}>
          <div className="thumb">
            <img src={heroImage} alt="" />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <div className="info">{publishedDate}</div>
          </div>
        </Link>
      </article>
    </StyledContainer>
  )
}

export default ThumbnailPost
