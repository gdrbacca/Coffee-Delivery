import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        font-size: 48px;
        line-height: 1.3;
        color: ${(props) => props.theme['base-title']};
    }
`
