import { dropdownItems } from "./Dropdown-object"
import styled from "styled-components"



// Customização do menu dropdown
const ContatoLink = styled.a`
  color:#E0E0E0;
  opacity:0.8;
  font-family:${({font}) => font};
  transition: .2s ease-in-out;
  &:hover{
    opacity:1;
    color:#FDA821;
  }&:after{
    content:"▼";
    display:inline-block;
    font-size:.625rem;
    margin-left:5px;  
    transition:transform .2s ease;  
  }&.active:after{
    content:"▼";
    display:inline-block;
    font-size:.625rem;
    margin-left:5px;
    transform:rotate(180deg);
  }&.active{
    color:#FDA821;
    opacity:1;
  }
 ` 

const DropUl = styled.ul`
display:block;
position:absolute;
right:0px;
background:#0F0F0F;
padding:20px;
margin-top:1rem;
box-shadow: 2px 4px 5px rgba(0,0,0,.2);
z-index:11;
@media (max-width:63rem) {
  right:-40px;
  background:initial;
  padding-bottom:0; 
}
`

const DropLi = styled.li`
margin-bottom: 1rem;
`

const DropLink = styled.a`
 padding: 10px;
 display:flex;
 align-items:center;
`

const SpanDrop = styled.span`
 font-size:1rem;
 font-family:"Roboto Mono", monospace;
 color:#F5F5F5;
 margin-left:10px;
 transition: .2s ease-in-out;
 &:hover{
  color:#FDA821;
 }  @media (max-width:63rem) {
    font-size:.75rem;
  }
`



export const Dropdown = ({dropdown, setDropdown}) => {

// evento de click do menu dropdown;
  const handleDropdown = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
  }

  return (
  <>
    <ContatoLink className={dropdown ? 'active' : ''} font={'Roboto'} onClick={handleDropdown} href="contato.html">Contato</ContatoLink>
    {dropdown &&     
        <DropUl>
          {dropdownItems.map((item) => 
          <DropLi key={item.id}>
            <DropLink  href={item.linkSrc} target="_blank" >
            <i><img style={{maxWidth:'20px'}} src={item.imgSrc} alt={item.span} /></i>              
              <SpanDrop>{item.span}</SpanDrop>
            </DropLink>
            </DropLi>)
          }
        </DropUl>
    }
    </>

  )
}