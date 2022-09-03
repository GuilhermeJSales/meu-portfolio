import styled from 'styled-components';
import {Container} from '../styles'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/header-logo.svg'

// HEADER STYLES
const HeaderSite = styled.header`
padding: 30px 0;
`;

const ContainerHeader = styled(Container)`
display:flex;
align-items:center;
justify-content:space-between;
padding:0;
`;

const HeaderUl = styled.ul`
display:flex;
align-items:center;
`;

const HeaderLI = styled.li`
  font-size:1rem;
  margin:1.25rem;
`;


const LinkHeader = styled(Link)`
  color:#E0E0E0;
  opacity:0.8;
  font-family:${({font}) => font};
  position:relative;
  transition: .2s ease-in-out;
  &:hover,
  &:focus{
    opacity:1;
    color:#F5F5F5;
  }
  &:after{
   content:"";
   width:100%;
   height:2px;
   background:#FDA821;
   position:relative;
   bottom:-68px;
   display: block;
   opacity:0;
  transition: .2s ease-in-out;
  }&:hover:after,
  &:focus:after{
    opacity:1;
    outline:none;
  }`;

export const Header = () => {
  return (
  <HeaderSite>
    <ContainerHeader>
      <Link to="/">
        <Logo />
      </Link>
    <nav>
      <HeaderUl>
        <HeaderLI><LinkHeader font={'Roboto'} to="/">Início</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="portfolio">Portfólio</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="contato">Contato</LinkHeader></HeaderLI>
      </HeaderUl>
    </nav>
    </ContainerHeader>
  </HeaderSite>
  )
}