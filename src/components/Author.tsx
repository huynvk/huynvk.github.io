import React from "react"
import styled from "styled-components"

interface IProps {
  name: string
  avatar: string
  publishDate: string
}

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .name {
    display: inline-block;
    ${props => ({ ...props.theme.scale(-0.25) })}
    line-height: 1.5rem;
  }

  .publishDate {
    color: ${props => props.theme.colors.gray500};
    ${props => ({ ...props.theme.scale(-0.75) })}
    line-height: 0.75rem;
  }

  .avatar {
    display: inline-block;
    width: 2rem;
    border-radius: 50%;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0.75rem;
  }
`

function Author({ name, avatar, publishDate }: IProps) {
  return (
    <AuthorContainer>
      <img className="avatar" src={avatar}></img>
      <div className="text">
        <div className="name">{name}</div>
        <div className="publishDate">{publishDate}</div>
      </div>
    </AuthorContainer>
  )
}

Author.defaultProps = {
  name: "Huy Ngo",
  avatar: "../avatar.jpg",
  publishedDate: "Oct 28, 2019",
}

export default Author
