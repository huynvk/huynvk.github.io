import React from "react"
import styled from "styled-components"
import SEO from "@components/SEO"

import {
  Navigation,
  Hero,
  WorkingPrincipleSection,
  ExperiencedDomainSection,
  TechnicalStack,
  Contact,
  Footer,
} from "@components/Section"

const HomePage = () => (
  <div>
    <SEO title="Huy Ngo Personal Blog | Programming and Life" />
    <Navigation
      menus={[
        { label: "Working Principles", link: "#principles" },
        { label: "Experienced Domains", link: "#domains" },
        { label: "Technical Stack", link: "#technicalStack" },
        { label: "Contact", link: "#contact" },
      ]}
      cta={{ label: "View My Blog", link: "/blog" }}
    />
    <Hero />
    <WorkingPrincipleSection id="principles" />
    <ExperiencedDomainSection id="domains" />
    <TechnicalStack id="technicalStack" />
    <Contact id="contact" />
    <Footer />
  </div>
)

export default HomePage
