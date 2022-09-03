import {ReactComponent as Linkedin} from '../../Assets/linkedin.svg'
import {ReactComponent as Whatsapp} from '../../Assets/whatsapp.svg'
import {ReactComponent as GitHub} from '../../Assets/git.svg'
import {ReactComponent as Behance} from '../../Assets/behance.svg'
import {ReactComponent as Instagram} from '../../Assets/instagram.svg'
import styled from 'styled-components';


const RedesDiv = styled.div` 
  position:fixed;
  left: 40px;
  bottom:80px;
`;

const RedesLi = styled.li`
  margin-bottom:1rem;
  cursor:pointer;
`

const RedesSpan = styled.span`
font-family:'Roboto Mono', monospace;
font-size:.875rem;
text-transform:uppercase;
color:#fff;
writing-mode: vertical-rl;
text-orientation: upright;
margin-bottom:30px;
`



export const Redes = () => {
  return (
    <RedesDiv>
      <RedesSpan>Redes Sociais |</RedesSpan>
      <ul>
        <RedesLi>
          <a href="https://wa.me/5511961683295?text=Ol%C3%A1%2C+estou+entrando+em+contato+referente+ao+seu+site." target="_blank">
            <Whatsapp/>
          </a>          
        </RedesLi>

        <RedesLi>
          <a href="https://www.linkedin.com/in/guilherme-jesus-sales-792157209/" target="_blank">
          <Linkedin/>
          </a>
        </RedesLi>

        <RedesLi>
        <a href="https://github.com/GuilhermeJSales" target="_blank">
          <GitHub/>
        </a>
        </RedesLi>

        <RedesLi>
        <a href="https://www.behance.net/guijsales" target="_blank">
          <Behance/>
        </a>
        </RedesLi>
        
        <RedesLi>
        <a href="https://www.instagram.com/guijsales/" target="_blank">
          <Instagram/>
        </a>
        </RedesLi>
      </ul>
    </RedesDiv>
  )
}