// @flow

import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const SectionContainer = styled.div`
  min-height: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.isDark &&
    `
    background-color: #6D8BEA;
    overflow: hidden;
    color: #fff;

    &::before {
      content: "";
      background-image: url("images/WhiteRectangle.png");
      position: absolute;
      width: 100%;
      height: 100%;
      min-width: 600px;
      background-repeat: no-repeat;
      top: 0;
      left: 0;
      background-size: contain;
    }
  `}
`

const HomeSectionContainer = styled(SectionContainer)`
  background-image: linear-gradient(120deg, #eeeeee55, #4b71e755);

  &::before {
    position: absolute;
    content: '';
    background-image: url('/images/OvalGradient.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
`

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;

  span {
    display: flex;
    align-items: center;
  }

  img {
    max-height: 2rem;
    margin-right: 1rem;
  }
`

const Content = styled.div`
  font-size: 1rem;

  p {
    margin-bottom: 1rem;
  }
`

const Columns = styled.div`
  display: flex;
  flex-direction: ${props => (props.isRight ? 'row-reverse' : 'row')};
  justify-content: space-around;
  max-width: 1140px;
  position: relative;
`

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
`

const TextColumn = styled.div`
  /* max-width: 40vw; */
  flex: ${props => (props.flex ? props.flex : 1)};
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionContent = ({ title, content, isRight, image, children }) => {
  return (
    <React.Fragment>
      {children}
      <Columns isRight={isRight}>
        <TextColumn flex={2}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextColumn>
        <TextColumn>{image && <Image src={image} alt="" />}</TextColumn>
      </Columns>
    </React.Fragment>
  )
}

const Section = ({ isHomeSection, isDark, ...props }) => {
  if (isHomeSection) {
    return (
      <HomeSectionContainer>
        <Header>
          <img src="/images/shino-icon-long.png" alt="logo" />
        </Header>
        <SectionContent {...props} />
      </HomeSectionContainer>
    )
  } else {
    return (
      <SectionContainer isDark={isDark}>
        <SectionContent {...props} />
      </SectionContainer>
    )
  }
}

export default Section
