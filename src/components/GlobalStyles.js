import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Apple SD Gothic Neo','Noto Sans KR',arial,sans-serif;
        background-color:rgba(20,20,20,1);
        color:white;
        
        &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
    }
`;

export default GlobalStyles;
