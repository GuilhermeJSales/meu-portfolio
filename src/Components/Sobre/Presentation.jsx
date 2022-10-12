import styled from 'styled-components';
import {Title, Paragraph} from '../../styles'
import { Button } from '../Forms/Button'  





// HOME PRESENTATION


const SectionPresentation = styled.section`
  padding-bottom:200px; 
  @media (max-width:56.25rem){
      padding-bottom:100px; 
  }
`;

const Span = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:1.1rem;
  color:#F29602;
`;


const SubTitle = styled.h2`
  font-family:'Roboto', sans-serif;
  font-size:clamp(1.5rem, 5vw, 5rem);
  color:#9F9F9F;
`;

const ParagraphPresentation = styled(Paragraph)`
  margin: 1.875rem 0 1.875rem;
`;

const DivFlex = styled.div`
display:flex;
align-items:center;
`;



export const Presentation = () => {

  return (   
    <SectionPresentation data-aos="fade-up"  data-aos-duration="2000">
      <Span>Olá, meu nome é</Span>
      <Title>Guilherme Jesus Sales.</Title>
      <SubTitle>Sou desenvolvedor front-end.</SubTitle>
      <ParagraphPresentation>
        Possuo experiências no desenvolvimento de sites, criação de layouts e artes para mídias sociais.<br></br>
        Atuei desenvolvendo sites, na maioria das vezes para divulgar os serviços prestados pelos clientes e trazer um meio de comunicação mais eficiente com o público alvo, 
        utilizando HTML5, CSS3, Javascript, ReactJS, bibliotecas como por exemplo o TailwindCSS e algumas vezes o CMS WordPress. Acredito que posso integrar seu time e ajudar no crescimento da sua empresa, 
        sempre disposto a aprender novas tecnologias e sempre comprometido com datas e detalhes dos trabalhos.
      </ParagraphPresentation>
      <DivFlex>
        <Button to="projetos">Meus Projetos</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}