import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --default-border-radius: 6px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    background: ${(props) => props.theme['--background']};
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--yellow-dark']};
  }
`