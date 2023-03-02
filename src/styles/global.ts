import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-orange: #ff8135;
    --color-gray: #636363;
    --color-blue: #4f24c1;
    }

    html, body, #root {
        min-height: 100vh;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: white;
    }
    body,input, textarea, button {
        font-family: 'Roboto';
        color: white;
    }   
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .cursor-pointer { cursor: pointer; }

    .blueButton {
        background-color: var(--color-blue);
        &:hover {
            background-color: var(--color-blue);
            filter: brightness(0.9);
            color: white;
        }
    }

    .orangeButton {
        background-color: var(--color-orange);
        
        &:hover {
            background-color: var(--color-orange);
            filter: brightness(0.9);
            color: white;
        }
    }
`;
