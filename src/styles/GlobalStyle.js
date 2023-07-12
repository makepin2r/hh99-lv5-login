import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
