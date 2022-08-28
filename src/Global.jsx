import {createGlobalStyle} from "styled-components";


export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;    
  }

  body{
    background:#141414;
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