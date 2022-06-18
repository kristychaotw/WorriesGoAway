import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html{
    scrollbar-width: thin;
    scrollbar-color:  #8ba6bc #e4e5e9;
}
::-webkit-scrollbar{
    width: 0.8vw;
}

::-webkit-scrollbar-track{
    background-color: #e4e5e955;
}

::-webkit-scrollbar-track:hover{
    background-color: #e4e5e9;
}
::-webkit-scrollbar-thumb{
    background-color: #8ba6bc55;
    border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover{
    background-color: #8ba6bc;
    border-radius: 100px;
}

*{
    box-sizing: border-box;
}

body{
    font-family: 'Raleway', sans-serif,'Noto Sans TC', sans-serif;
    background-color: #F2F2F2;
    color:#656565;
}
`;

export default GlobalStyles;
