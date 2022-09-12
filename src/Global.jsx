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
    overflow-x:hidden;
  }

  body::-webkit-scrollbar-track {
    background-color: #3333;
  }

  body::-webkit-scrollbar {
    width: 1rem;
    background: #3333;
}

body::-webkit-scrollbar-thumb {
    background: #333;
    border-radius:6px;
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

  @keyframes animaLink{
    from {
      opacity:0;
      transform:  translateX(-100%);
    } to {
      opacity: 1;
      transform: translateX(0%);
    }
  }



// CLASSES E ANIMAÇÕES GERAIS PARA REVEAL SCROLL

  @keyframes animaSection{
    0% {
      opacity:0;
      transform: translate3d(0, 100px , 0);
    } 100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  
  @keyframes animaRedes{
    0% {
      opacity:0;
      transform: translate3d(-100px, 0 , 0);
    } 100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes animaHeader{
    0% {
      opacity:0;
      transform: translate3d(0, -200px , 0);
    } 100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }


  .init-hidden{
    opacity:0;
  }

  .init-hidden-of{
    animation: animaSection 1.5s ease-in-out forwards;
  }

  .redes{
    opacity:0;
  }

  .init-hidden-redes{
    opacity:1;
    animation: animaRedes 3s ease;
  }

`