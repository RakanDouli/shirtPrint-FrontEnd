import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
}
html { 
  font-size: 62.5%; 
  box-sizing:border-box;

 
}
`;
export default GlobalStyle;
