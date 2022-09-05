import {ReactComponent as Linkedin} from '../../Assets/linkedin.svg'
import {ReactComponent as Whatsapp} from '../../Assets/whatsapp.svg'
import {ReactComponent as GitHub} from '../../Assets/git.svg'
import {ReactComponent as Behance} from '../../Assets/behance.svg'
import {ReactComponent as Instagram} from '../../Assets/instagram.svg'
import styled from 'styled-components';
import { useMedia } from '../../Hooks/useMedia'


const RedesDiv = styled.div` 
  position:fixed;
  left: 1rem;
  bottom:1rem;
  z-index:10;
`;

const RedesLi = styled.li`
  margin-bottom:1rem;
  cursor:pointer;
 
`
export const Redes = () => {
  const media = useMedia('(max-width:49rem)')
  return (
    <>
    {!media && 
    <RedesDiv>
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
  }
  </>
  )
}