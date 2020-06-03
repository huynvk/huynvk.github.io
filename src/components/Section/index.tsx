import React from "react"
import styled from "styled-components"
import Hero from "./Hero"
import Contact from "./Contact"
import Footer from "./Footer"
import { screenSizes } from "@styles/config.screensizes.js"

export { Hero, Contact, Footer }

const NavBar = styled.div`
  text-align: right;
  width: 100%;
  a {
    font-family: "jost";
    font-size: 0.6rem;
    margin-right: 1rem;
  }
`

const NavButton = styled.a`
  color: #3854ad;

  &:hover {
    color: #f5a623;
  }
`

const CTA = styled.a`
  color: #fff;
  background-color: #f5a623;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: #c78c2a;
  }
`

export const Navigation = ({ menus, cta }) => (
  <NavBar>
    {menus.map(({ label, link }, i) => (
      <NavButton href={link || "#"} key={i}>
        {label || "Label"}
      </NavButton>
    ))}
    {cta && <CTA href={cta.link || "#"}>{cta.label || "CTA"}</CTA>}
  </NavBar>
)

const withBackground = color => c => (
  <div style={{ backgroundColor: color }}>{c}</div>
)

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1040px;
  ${props =>
    props.rightAlign
      ? "flex-direction: column-reverse;"
      : "flex-direction: column;"}

  margin: 0 auto;
  margin-left: 2rem;
  margin-right: 2rem;
  min-height: 35rem;

  @media ${screenSizes.mediumUp} {
    ${props =>
      props.column ? "flex-direction: column;" : "flex-direction: row;"}
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
  }
`

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media ${screenSizes.mediumUp} {
    margin-top: 0;
    align-items: ${props =>
      props.rightAlign
        ? "flex-end"
        : props.centerAlign
        ? "center"
        : "flex-start"};
    ${props => (props.centerAlign ? "" : "flex: 1")}
  }
`

const SectionTitleText = styled.div`
  color: #3854ad;
  font-size: 1.5rem;
  font-family: "Teko";
  text-transform: uppercase;
`

const SectionTitleBorder = styled.div`
  display: block;
  height: 1px;
  width: 40%;
  background-color: #3854ad;
`

const SectionTitle = ({ children, rightAlign, centerAlign, ...props }) => (
  <SectionTitleContainer
    rightAlign={rightAlign}
    centerAlign={centerAlign}
    {...props}
  >
    <SectionTitleText>{children}</SectionTitleText>
    <SectionTitleBorder rightAlign={rightAlign} centerAlign={centerAlign} />
  </SectionTitleContainer>
)

const SubSectionTitle = styled.div`
  color: #3854ad;
  font-size: 1rem;
`

const SubSectionContent = styled.div`
  font-size: 0.9rem;
  color: #404040;
  margin-bottom: 2rem;
`

const SubSections = styled.div`
  flex: 1;
  margin-top: 1rem;
  font-family: "jost";
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${screenSizes.mediumUp} {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`

const SubSectionContainer = styled.div`
  flex: 1;
`

const IconSection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: "space-around";

  a {
    padding: 1rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px #888888;
}

    }
  }

  img {
    height: 3rem;
    margin-bottom: 0;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const Image = ({ href, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img {...props} />
  </a>
)

const SubSection = ({ title, content, rightAlign, ...props }) => (
  <SubSectionContainer {...props}>
    <SubSectionTitle>{title}</SubSectionTitle>
    <SubSectionContent>{content}</SubSectionContent>
  </SubSectionContainer>
)

export const WorkingPrincipleSection = props => (
  <Section>
    <SectionTitle>My Working Principles</SectionTitle>
    <SubSections>
      <SubSection
        title="Be nice and profressional"
        content="Be nice and respectful while playing as a team member and act professionally toward team goal."
        {...props}
      />
      <SubSection
        title="Transparent"
        content="Confusion and misunderstanding can cause a lot of frustrations among the team. Be clear in vision can motivate tech team while transparency on difficulties and blockers can release frustrations for product owners and stakeholders."
      />
      <SubSection
        title="Customer collaboration"
        content="A contract is important but no subtitute for working closely with customers to discover what they need."
      />
      <SubSection
        title="Responding to changes"
        content="Project plan is important, but it must not be too rigid to accommodate changes."
      />
    </SubSections>
  </Section>
)

export const ExperiencedDomainSection = props =>
  withBackground("#D1DBF8")(
    <Section rightAlign>
      <SubSections>
        <SubSection
          title="Fintech"
          content="Highly scalable fintech system which execute payments and installments for pet owners in the US and Canada."
          {...props}
        />
        <SubSection
          title="Blockchain"
          content="Were part of highly skillable teams working on different interesting Crypto projects such as Crypto wallet or blockchain games. Work mainly on Ethereum and Tezos."
        />
        <SubSection
          title="Logistics"
          content="Traveled and worked inside leading logistic company in Asia."
        />
        <SubSection
          title="Networking and IoT Devices"
          content="Built products to help improving process inside manufacture, which focus on producing Networking and IoT devices."
        />
        <SubSection
          title="Automation Testing"
          content="Built framework and wrote automation test scripts for enterprise applications."
        />
      </SubSections>
      <SectionTitle rightAlign>Experienced Domains</SectionTitle>
    </Section>
  )

export const TechnicalStack = props => (
  <Section column>
    <Spacer />
    <SectionTitle {...props} centerAlign>
      Technical Stacks
    </SectionTitle>
    <IconSection>
      <Image
        alt="Golang"
        href="https://golang.org/"
        src="https://golang.org/lib/godoc/images/go-logo-blue.svg"
      />
      <Image
        alt="Python"
        href="https://www.python.org/"
        src="https://www.python.org/static/img/python-logo.png"
      />
      <Image
        alt="Nodejs"
        href="https://nodejs.org/"
        src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
      />
      <Image
        alt="React"
        href="https://reactjs.org/"
        src="https://logodix.com/logo/1658518.png"
      />
    </IconSection>
    <IconSection>
      <Image
        alt="Google Cloud Platform"
        href="https://cloud.google.com/"
        src="https://cloud.google.com/images/velostrata/cloud-lockup-logo.png?hl=pt-BR"
      />
      <Image
        alt="Amazone Web Service"
        href="https://aws.amazon.com/"
        src="data:image/png;base64,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"
      />
      <Image
        alt="Firebase"
        href="https://firebase.google.com/"
        src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png"
      />
    </IconSection>
    <IconSection>
      <Image
        alt="PostgreSQL"
        href="https://www.postgresql.org/"
        src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png"
      />
      <Image
        alt="MySQL"
        href="https://www.mysql.com/"
        src="https://cdn.worldvectorlogo.com/logos/mysql.svg"
      />
      <Image
        alt="Ethereum"
        href="https://ethereum.org/"
        src="https://i.pinimg.com/originals/03/60/ba/0360bafe07fdd50bdd325bac4e1afb3f.png"
      />
      <Image
        alt="Tezos"
        href="https://tezos.com/"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDQ3IDY0Ij48cGF0aCBmaWxsPSIjMkM3REY3IiBkPSJNMzAuMjUyIDYzLjQ0MWMtNC41NSAwLTcuODY0LTEuMDg5LTkuOTQ2LTMuMjY3LTIuMDgtMi4xNzctMy4xMjEtNC41MjUtMy4xMjEtNy4wNDEgMC0uOTIuMTgxLTEuNjk0LjU0NC0yLjMyM2EzLjk5MyAzLjk5MyAwIDAgMSAxLjQ4OS0xLjQ4OWMuNjI5LS4zNjMgMS40MDMtLjU0NCAyLjMyMy0uNTQ0LjkyIDAgMS42OTMuMTgxIDIuMzIzLjU0NC42MjkuMzYzIDEuMTI1Ljg2IDEuNDg4IDEuNDg5LjM2My42MjkuNTQ0IDEuNDAzLjU0NCAyLjMyMyAwIDEuMTEzLS4yNjYgMi4wMi0uNzk4IDIuNzIyLS41MzMuNzAyLTEuMTYyIDEuMTYxLTEuODg4IDEuMzguNjMuODcgMS42MjIgMS40ODcgMi45NzcgMS44NSAxLjM1NS4zODggMi43MS41ODEgNC4wNjUuNTgxIDEuODg3IDAgMy41OTMtLjUwOCA1LjExOC0xLjUyNCAxLjUyNC0xLjAxNyAyLjY1LTIuNTE3IDMuMzc2LTQuNTAxLjcyNi0xLjk4NCAxLjA4OS00LjIzNSAxLjA4OS02Ljc1MiAwLTIuNzM0LS40LTUuMDctMS4xOTgtNy4wMDUtLjc3NS0xLjk2LTEuOTI0LTMuNDEyLTMuNDQ5LTQuMzU2YTkuMjEgOS4yMSAwIDAgMC00LjkzNi0xLjQxNWMtMS4xNjIgMC0yLjYxMy40ODQtNC4zNTYgMS40NTJsLTMuMTk0IDEuNTk3di0xLjU5N0wzNy4wNzYgMTYuNEgxNy4xODV2MTkuODljMCAxLjY0Ni4zNjMgMy4wMDEgMS4wODkgNC4wNjZzMS44MzkgMS41OTcgMy4zNCAxLjU5N2MxLjE2IDAgMi4yNzQtLjM4NyAzLjMzOS0xLjE2MmExMS44MDMgMTEuODAzIDAgMCAwIDIuNzU4LTIuODNjLjA5Ny0uMjE5LjIxOC0uMzc2LjM2My0uNDczYS43MjMuNzIzIDAgMCAxIC40NzItLjE4MWMuMjY2IDAgLjU4LjEzMy45NDQuNC4zMzkuMzg2LjUwOC44MzQuNTA4IDEuMzQyYTkuMjQzIDkuMjQzIDAgMCAxLS4xODIgMS4wMTdjLS44MjIgMS44MzktMS45NiAzLjI0Mi0zLjQxMiA0LjIxYTguNDU3IDguNDU3IDAgMCAxLTQuNzkgMS40NTJjLTQuMzA4IDAtNy4yODUtLjg0Ny04LjkzLTIuNTQtMS42NDUtMS42OTUtMi40NjgtMy45OTQtMi40NjgtNi44OTdWMTYuNEguMDUydi0zLjcwM2gxMC4xNjR2LTguNDJMNy44OTMgMS45NTJWLjA2Nmg2Ljc1MWwyLjU0IDEuMzA2djExLjMyNWwyNi4yOC0uMDcyIDIuNjE0IDIuNjEzLTE2LjExNiAxNi4xMTZhMTAuODA3IDEwLjgwNyAwIDAgMSAzLjA0OS0uNzI2YzEuNzQyIDAgMy43MDIuNTU3IDUuODggMS42NyAyLjIwMiAxLjA4OSAzLjg5NiAyLjU5IDUuMDgxIDQuNSAxLjE4NiAxLjg4OCAxLjk0OCAzLjcwMyAyLjI4NyA1LjQ0NS4zNjMgMS43NDMuNTQ1IDMuMjkxLjU0NSA0LjY0NiAwIDMuMDk4LS42NTQgNS45NzctMS45NiA4LjY0LTEuMzA3IDIuNjYxLTMuMjkxIDQuNjQ1LTUuOTUzIDUuOTUyLTIuNjYyIDEuMzA3LTUuNTQyIDEuOTYtOC42MzkgMS45NnoiLz48L3N2Zz4="
      />
    </IconSection>
    <Spacer />
  </Section>
)
