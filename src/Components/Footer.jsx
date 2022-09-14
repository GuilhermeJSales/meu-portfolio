import styled from "styled-components"



// FOOTER 

export const FooterP = styled.p` 
  text-align:center;
  font-size:1rem;
  font-family:'Roboto Mono', monospace;
  color:#E0E0E0;
  padding:50px 150px 100px ;
  @media (max-width: 48rem){
    padding:0 50px 50px;
  }  @media (max-width: 38rem){
    padding:0 25px 50px;
  } 

`

export const Footer = () => {
  return (
    <footer>
        <FooterP>Todos os direitos reservados - Guilherme Jesus Sales ©</FooterP>
    </footer>
  )
}