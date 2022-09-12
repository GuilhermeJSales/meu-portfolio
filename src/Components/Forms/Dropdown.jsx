import {ReactComponent as Linkedin} from '../../Assets/drop/linkedin-drop.svg'
import {ReactComponent as Git} from '../../Assets/drop/git-drop.svg'
import {ReactComponent as Mail} from '../../Assets/drop/mail-drop.svg'
import {ReactComponent as Behance} from '../../Assets/drop/behance-drop.svg'
import {ReactComponent as Whatsapp} from '../../Assets/drop/whatsapp-drop.svg'
import styled from 'styled-components';



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

const Span = styled.span`
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






export const Dropdown = ({setDropdown, dropdown, dropRef}) => {

  const handleDropdown = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
  }

  return (
    <>
    <ContatoLink className={dropdown ? 'active' : ''} font={'Roboto'} onClick={handleDropdown} href="contato.html">Contato</ContatoLink>
        {dropdown &&     
            <DropUl>
              <DropLi>
                <DropLink href="https://wa.me/5511961683295?text=Ol%C3%A1%2C+estou+entrando+em+contato+referente+ao+seu+site." target="_blank">
                  <Whatsapp/> <Span>WhatsApp</Span>
                </DropLink>
              </DropLi>
              <DropLi>
                <DropLink href="https://www.linkedin.com/in/guilherme-jesus-sales-792157209/" target="_blank">
                  <Linkedin/> <Span>Linkedin</Span>
                </DropLink>
              </DropLi>
              <DropLi>
                <DropLink href="mailto:guijsalesdg@outlook.com">
                  <Mail/> <Span>E-mail</Span>
                </DropLink>
              </DropLi>
              <DropLi>
                <DropLink href="https://github.com/GuilhermeJSales" target="_blank">
                  <Git/> <Span>Github</Span>
                </DropLink>
              </DropLi>
              <DropLi>
                <DropLink href="https://www.behance.net/guijsales" target="_blank">
                  <Behance/> <Span>Behance</Span>
                </DropLink>
              </DropLi>
            </DropUl>
          }
    </>
  )
}