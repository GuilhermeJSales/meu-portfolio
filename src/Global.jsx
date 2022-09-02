import {createGlobalStyle} from "styled-components";


export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;    
  }

  body{
    background:#141414;
    -webkit-font-smoothing: antialiased;
    width:100%;
    min-height:100%;
    line-height: 1.2;
  }

  button {
    cursor: pointer;
  }

  li{
    list-style:none;
  }

  a{
    text-decoration:none;
  }

  img{
    display:block;
    max-width:100%;
  }
`