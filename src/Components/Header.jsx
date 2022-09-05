import { Link, useLocation } from 'react-router-dom'
import { useState,useRef, useEffect} from 'react';
import { useMedia } from '../Hooks/useMedia';
import { useOutsideClick } from '../Hooks/useOutsideClick';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../Assets/header-logo.svg'
import {Container} from '../styles'

// HEADER STYLES
const HeaderSite = styled.header`
padding: 30px 0;
`;

const ContainerHeader = styled(Container)`
display:grid;
grid-template-columns: 1fr auto;
align-items:center;
justify-content:space-between;
padding:0 60px;
`;

const DivImg = styled.div`
@media (max-width:63rem){
  grid:2;
}
`

const HeaderUl = styled.ul`
display:flex;
align-items:center;
@media (max-width:63rem){
  flex-direction:column;
  background:#141414;
  box-shadow: 2px 6px rgba(0,0,0,.1);
  width:30vw;
  height:100vh;
  position:absolute;
  left:-100px;
  transition: .3s ease-in-out;
  opacity:0;
  top:0;
  padding:100px 20px 0 50px;
  &.mobileActive{
    left:0;
    opacity:1;
  }
}
`;


const HeaderLI = styled.li`
  font-size:1rem;
  margin:1.25rem;
  @media(max-width:63rem) {
    opacity:0;
    margin-bottom: 2rem;
    align-self:start;
    &:before{
      content:"•";
      color:#FDA821;
      margin-right:10px;
    }
    
    
  }  
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
  } @media (max-width:63rem){
    &:after{
    display:none;
    } 
  }
  `;


const MobileButton = styled.button`
grid:1;
 padding:20px;
 background:transparent;
 outline:none;
 border:none;
 cursor:pointer;
 color:#F5F5F5;
&:after{
  content:"";
  display:block;
  width:1.4rem;
  height:2px;
  background:currentColor;
  border-radius:2px;
  box-shadow: 0 8px currentColor, 0 -8px currentColor;
  transition: .3s ease-in-out;
}&:focus:after,
 &:hover:after {
  color:#FDA821;
}&.buttonActive:after{
 transform: rotate(-90deg);
 width:4px;
 height:4px;
}
`

export const Header = () => {
  const mobile = useMedia('(max-width:63rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const {pathname} = useLocation();
  const ref = useRef(null);
  const wrapperRef = useRef()


  // fechar menu toda vez que mudar de rota
  useEffect(() => {
    setMobileMenu(false);
  },[pathname])


  // evento de click do mobile menu
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
    const list = [...ref.current.children];
    list.forEach((item, index) => {
      !mobileMenu ? item.style.animation=`animaLink .5s ease forwards ${index / 7 + 0.3}s` : item.style.animation = '';
    })
  }

  useOutsideClick(wrapperRef, () => setMobileMenu(false));

  return (
  <HeaderSite>
    <ContainerHeader>
      <DivImg>
      <Link to="/">
        <Logo />
      </Link>
      </DivImg>
    <nav ref={wrapperRef}>
    {mobile && <MobileButton aria-label='menu' onClick={handleClick} className={mobileMenu && 'buttonActive'}></MobileButton>}
      <HeaderUl ref={ref} className={mobileMenu && 'mobileActive'}>
        <HeaderLI><LinkHeader font={'Roboto'} to="/">Início</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="portfolio">Portfólio</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="contato">Contato</LinkHeader></HeaderLI>
      </HeaderUl>
    </nav>
    </ContainerHeader>
  </HeaderSite>
  )
}