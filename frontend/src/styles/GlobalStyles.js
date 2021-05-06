import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  
} 
body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: var(--background1-main);  
    font-family: 'Quicksand', sans-serif; 
}

:root {
  
    --color1-main: #102a43;
    --color2-main: #393232;
    --color3-main: #151515;
    --text-main: lightcoral;
    --text2-main: #d996a8;
    --text3-main: #d4b8c0;
    --border-main: pink;

    --color1-secondary: #236677;
    --color2-secondary: #1bb9ac;
   
    --color1-shadow: hotpink;
    --color2-shadow: #486581;
   
    --background1-main: #282c34;
    --background2-main: #18191c;
    --background3-main: #115363;

    

    a, a:link, a:visited {
      text-decoration: none;
      color: #06acf1;
      transition: 0.3s;
      
    }
    a:hover  {
      color: pink;
      transition: 0.3s; 
    }
    
}
::-webkit-scrollbar {
  width: 0.75em;
  background: #282c34;
}

::-webkit-scrollbar-thumb {
  background: rgba(250, 153, 172, 1);
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(244, 16, 62, 0.6);
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.7);
  border-radius: 5px;
  background-color: #18191c;
}
`

export { GlobalStyle }
