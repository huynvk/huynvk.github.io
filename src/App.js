// @flow

import React from 'react'
import Page from './components/Page'
import Home from './partial/Home'
import Health from './partial/Health'
import Information from './partial/Information'
import Advice from './partial/Advice'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <Page>
        <Home />
        <Health />
        <Information />
        <Advice />
        <Footer />
      </Page>
    )
  }
}

export default App
