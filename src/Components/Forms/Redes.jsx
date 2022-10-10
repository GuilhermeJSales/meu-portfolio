import {ReactComponent as Linkedin} from '../../Assets/linkedin.svg'
import {ReactComponent as Whatsapp} from '../../Assets/whatsapp.svg'
import {ReactComponent as GitHub} from '../../Assets/git.svg'
import {ReactComponent as Behance} from '../../Assets/behance.svg'
import {ReactComponent as Instagram} from '../../Assets/instagram.svg'
import styled from 'styled-components';
import { useMedia } from '../../Hooks/useMedia'
import { useScrollAnima } from '../../Hooks/useScrollAnima'


const RedesDiv = styled.div` 
  position:fixed;
  left: 10px;
  bottom:70px;
  z-index:8;
`;

const RedesLi = styled.li`
  margin-bottom:1rem;
  cursor:pointer;
 
`
export const Redes = () => {
  const media = useMedia('(max-width:20rem)')
  useScrollAnima('.redes', 'init-hidden-redes');

  console.log(media)
  return (
    <>
 
  {!media &&
    <RedesDiv className="redes">
      <ul>
        <RedesLi>
          <a href="https://wa.me/5511961683295?text=Ol%C3%A1%2C+estou+entrando+em+contato+referente+ao+seu+site." target="_blank">
            <i>
              <Whatsapp/>
            </i>
          </a>          
        </RedesLi>

        <RedesLi>
          <a href="https://www.linkedin.com/in/guilherme-jesus-sales-792157209/" target="_blank">
          <i>
           <Linkedin/>
          </i>
          </a>
        </RedesLi>

        <RedesLi>
        <a href="https://github.com/GuilhermeJSales" target="_blank">
          <i>
            <GitHub/>
          </i>
        </a>
        </RedesLi>

        <RedesLi>
        <a href="https://www.behance.net/guijsales" target="_blank">
          <i>
            <Behance/>
          </i>
        </a>
        </RedesLi>
        
        <RedesLi>
        <a href="https://www.instagram.com/guijsales/" target="_blank">
          <i>
            <Instagram/>
          </i>
        </a>
        </RedesLi>
      </ul>
    </RedesDiv>
}
  
  </>
  )
}