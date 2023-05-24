import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --header: #121214;
        --green-dark: #015F43;
        --green: #00875F;
        --greenlight: #00B37E;
        --red-dark: #AA2834;
        --red: #f75a68;
        --background: #202024;
        --shape-secondary: #29292E;
        --shape-third: #323238;
        --placeholder: #7C7C8A;
        --text-base: #C4C4CC;
        --title: #E1E1E6;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    button:hover {
        opacity: .8;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 0.35rem;
        background-color: var(--background);
    }

    .react-modal-close{
        background-color: transparent;
        position: absolute;
        border: 0;
        top: 1.5rem;
        right: 1.5rem;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;