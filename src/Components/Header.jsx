import styled from 'styled-components';


import { ReactComponent as Logo } from '../Assets/header-logo.svg'
import { ReactComponent as MobileLogo } from '../Assets/header-mobile.svg'





import { Link, useLocation } from 'react-router-dom'
import { useState,useRef, useEffect} from 'react';
import { useMedia } from '../Hooks/useMedia';
import { useOutsideClick } from '../Hooks/useOutsideClick';
import { Dropdown } from './DropdownContact/Dropdown';


// HEADER STYLES
const HeaderSite = styled.header`
padding: 30px 0;
`;

const ContainerHeader = styled.div`
max-width:min(100% - 100px, 1600px - 150px);
margin:0 auto 100px;
display:grid;
grid-template-columns: 1fr auto;
align-items:center;
justify-content:space-between;
 @media (max-width: 38rem){
    margin: 0 auto 50px;
  } 
`;

const DivImg = styled.div`
@media (max-width:63rem){
  grid:2;
}
`

const HeaderUl = styled.ul`
display:flex;
align-items:center;
z-index:9;
@media (max-width:63rem){
  flex-direction:column;
  align-items:flex-start;
  background:#141414;
  box-shadow: 2px 6px rgba(0,0,0,.1);
  width:60vw;
  height:100%;
  position:fixed;
  left:-400px;
  transition: .3s ease-in-out;
  opacity:0;
  top:0;
  pointer-events:none;
  padding:3.125rem 0;
  &.mobileActive{
    left:0;
    opacity:1;
    pointer-events:initial;
  }
}
`;

const HeaderLI = styled.li`
  font-size:1rem;
  margin:1.25rem;
  opacity:0;
  z-index:9;
  @media(max-width:63rem) {
    opacity:0;
    margin:1.25rem 3rem;
    align-self:flex-start; 
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
    color:#FDA821;
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
  const [dropdown, setDropdown] = useState(false);

  // fechar menu toda vez que mudar de rota
  useEffect(() => {
    setMobileMenu(false);
    setDropdown(false);
    window.scroll(0,0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  },[pathname])


  // Evento outside para fechar menu ao clicar fora.
  useOutsideClick(wrapperRef, () => setMobileMenu(false));
  useOutsideClick(wrapperRef, () => setDropdown(false));

  // evento de click do mobile menu
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
    if(!mobileMenu) {
      setDropdown(true);
    }
  }


  //Animação dos links no menu mobile.
  useEffect(() => {
    const animationLink = ()=> {
      const list = [...ref.current.children];
      list.forEach((item, index) => {
        if(mobile && mobileMenu) {
          item.style.animation=`animaLink .5s ease forwards ${index / 7 + 0.3}s`;
        } else {
          item.style.animation=`animaHeader .5s ease forwards ${index / 7 + 0.3}s`;
        }       
      })
    }
    animationLink();
  },[mobile]);

  return (
  <HeaderSite>
    <ContainerHeader>   
      <DivImg>
      <Link to="/">
        {mobile ? <MobileLogo /> : <Logo data-aos="fade" data-aos-duration="1600"/>}
      </Link>
      </DivImg>
    <nav ref={wrapperRef}>
    {mobile && <MobileButton onClick={handleClick} className={mobileMenu && 'buttonActive'}></MobileButton>}
      <HeaderUl ref={ref} className={mobileMenu && 'mobileActive'}>
        <HeaderLI><LinkHeader font={'Roboto'} to="/">Início</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="projetos">Projetos</LinkHeader></HeaderLI>
          <HeaderLI style={{position:'relative'}}>
          <Dropdown setDropdown={setDropdown} dropdown={dropdown}/>
          </HeaderLI>
      </HeaderUl>
    </nav>    
    </ContainerHeader>
  </HeaderSite>
  )
}