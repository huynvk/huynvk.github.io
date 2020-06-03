import React from "react"
import styled from "styled-components"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
`

const Columns = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #253873;
    font-size: 3rem;
    font-family: "Teko";
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: #3854ad;
    font-family: "jost";
    margin: 0;
    padding: 0;
    padding-bottom: 2rem;
    font-size: 1.2rem;
  }
`

const Avatar = styled.img`
  width: 15rem;
  margin-right: 2rem;
  margin-bottom: 0.3rem;
`

const JobTitle = styled.p`
  font-family: "jost";
  margin: 0;
  padding: 0;
`

const Quotes = styled.p`
  padding-top: 1.5rem;
  font-family: "Crimson Text", serif;
  font-style: italic;
  font-size: 1.4rem;
`

const DownButton = styled.div`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  color: #3854ad;
  border: 1px solid #3854ad;
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 2rem;
`

const Spacer = styled.div`
  flex: 1;
`

export default () => (
  <Section>
    <Spacer />
    <Columns>
      <Column>
        <Avatar src="huynvk.png" alt="Huy Ngo's Avatar" />
      </Column>
      <Column>
        <h1>Huy Ngo</h1>
        <h2>(Ngo Viet Khanh Huy)</h2>
        <JobTitle>Senior Fullstack Developer</JobTitle>
        <JobTitle>Technical Leader</JobTitle>
      </Column>
    </Columns>
    <Spacer />
    <Quotes>
      “Programming is like jokes. When you have to explain, you failed”
    </Quotes>
    <DownButton>↓</DownButton>
  </Section>
)
