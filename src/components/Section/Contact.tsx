import React from "react"
import styled from "styled-components"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const withBackground = color => c => (
  <div style={{ backgroundColor: color }}>{c}</div>
)

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #fff;
`

const Box = styled.div`
  background-color: #3854ad;
  padding: 2rem;
  margin: 0 auto;
  max-width: 30rem;
`

const Header = styled.div`
  font-size: 1.5rem;
  font-family: "Teko";
  text-transform: uppercase;
`

const Dividor = styled.div`
  display: block;
  height: 1px;
  width: 40%;
  background-color: #efefef;
`

const Paragraph = styled.p`
  font-family: "jost";
  color: #efefef;
  margin-bottom: 1.5rem;
`

const CTA = styled.a`
  color: #fff;
  background-color: #f5a623;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #c78c2a;
    color: #efefef;
  }
`

const Refs = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 20rem;
  display: flex;
  justify-content: space-around;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
`

const Ref = styled.a`
  color: #404040;
  &:hover {
    color: #4b71e7;
    cursor: pointer;
  }
`

export default props =>
  withBackground("#D1DBF8")(
    <Container {...props}>
      <Box>
        <Header>Send me a message</Header>
        <Dividor />
        <Paragraph>
          Get in touch by sending me a message, or contact me via other
          platforms
        </Paragraph>
        <CTA href="mailto:huynvk@gmail.com">Send Message</CTA>
      </Box>
      <Refs>
        <Ref
          href="mailto:huynvk@gmail.com"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Ref>
        <Ref
          href="https://github.com/huynvk"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Ref>
        <Ref
          href="https://stackoverflow.com/users/6601687/huy-ngo"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </Ref>
        <Ref
          href="https://www.linkedin.com/in/huynvk/"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Ref>
        <Ref
          href="https://www.facebook.com/huynvk"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </Ref>
        <Ref
          href="https://twitter.com/huynvk"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Ref>
      </Refs>
    </Container>
  )
