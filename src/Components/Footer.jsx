import { Link } from "react-router-dom";
import styled from "styled-components"

import { dropdownItems } from "./DropdownContact/Dropdown-object"




// FOOTER 

const FooterContent = styled.footer` 
  max-width:1600px;
  padding:0 150px;
  width:100%;
  margin:0 auto; 
  text-align:center;
  font-family:'Roboto Mono', monospace;
  color:#E0E0E0;
  padding-top:100px;
  padding-bottom:100px;
  @media (max-width:768px) {
    padding:0 50px;
    margin: 0 auto 50px;
    font-size:.875rem;
  }
  @media (max-width:425px) {
    padding:0 25px;
    font-size:.625rem;
  }
  @media (max-width:320px) {
    padding:0 20px;
  }
  .email{
    margin-bottom:20px;
  }
`;

const FooterUl = styled.ul`
  display:flex;
  justify-content:center;
  gap:20px;
  margin-bottom:20px;
  li a img{
    min-width:20px;
  }
`
const FooterDiv = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
`

const TecDiv = styled.div`
display:flex;
font-size:.875rem;
margin:10px 0;
justify-content:center;
align-items:center;
gap:20px;
.linksNav{
  color:#E0E0E0;
  transition: .2s ease;
  background:#3333;
  padding:10px;
  border-radius:6px;
  &:hover,
  &:focus{
    color:#F29602;
    background:#252525;
  }
   @media (max-width:425px) {
    font-size:.625rem;
  }
}
`

export const Footer = () => {
  return (
    <FooterContent>
      <FooterUl>
        {dropdownItems.map((item) => <li key={item.id}><a href={item.linkSrc} target="_blank"><img src={item.imgSrc} alt={item.span} /></a></li>)}
      </FooterUl>
      <TecDiv>
        <Link className="linksNav" to={`/`}>Início</Link>
        <Link className="linksNav" to={`/projetos`}>Projetos</Link>
      </TecDiv>
      <FooterDiv>
        <p>guijsalesdev@outlook.com</p>
        <p>Todos os direitos reservados - Guilherme J. Sales ©</p>
      </FooterDiv>
    </FooterContent>
  )
}