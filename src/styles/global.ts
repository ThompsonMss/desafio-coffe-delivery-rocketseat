import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --default-border-radius: 6px;

    --font-size-xl: 3rem;
    --font-size-l: 1.25rem;
    --font-size-m: 1rem;
    --font-size-s: 0.875rem;

    --font-size-title-l: 2rem;
    --font-size-title-s: 1.25rem;
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
    line-height: 130%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    line-height: 130%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--yellow-dark']};
  }
`