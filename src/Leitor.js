import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ReactReader } from './modules'
import {
  Container,
  ReaderContainer,
  Bar,
  LogoWrapper,
  Logo,
  GenericButton,
  CloseIcon,
  FontSizeButton,
  ButtonWrapper
} from './Components'

const storage = global.localStorage || null

const DEMO_URL = 'Me chame pelo seu nome.epub'
const DEMO_NAME = 'Me chame pelo seu nome'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-weight: 300;
    line-height: 1.4;
    word-break: break-word;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 1.8rem;
    background: #333;
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullscreen: true,
      location:
        storage && storage.getItem('epub-location')
          ? storage.getItem('epub-location')
          : 2,
      localFile: null,
      localName: null,
      largeText: false
    }
    this.rendition = null
  }

  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          this.rendition.resize()
        }, 500)
      }
    )
  }

  onLocationChanged = location => {
    this.setState(
      {
        location
      },
      () => {
        storage && storage.setItem('epub-location', location)
      }
    )
  }

  onToggleFontSize = () => {
    const nextState = !this.state.largeText
    this.setState(
      {
        largeText: nextState
      },
      () => {
        this.rendition.themes.fontSize(nextState ? '140%' : '100%')
      }
    )
  }

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state
    this.rendition = rendition
    rendition.themes.fontSize(largeText ? '140%' : '100%')
  }
  render() {
    const { fullscreen, location, localFile, localName } = this.state
    return (
      <Container>
        <GlobalStyle />
        <Bar>
          Voltar
        </Bar>
        <ReaderContainer fullscreen={fullscreen}>
          <ReactReader
            url={localFile || DEMO_URL}
            title={localName || DEMO_NAME}
            location={location}
            locationChanged={this.onLocationChanged}
            getRendition={this.getRendition}
          />
          <FontSizeButton onClick={this.onToggleFontSize}>
            Aumente a fonte
          </FontSizeButton>
        </ReaderContainer>
      </Container>
    )
  }
}

export default App
