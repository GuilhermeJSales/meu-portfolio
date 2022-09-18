import styled from 'styled-components';
import {Title, Paragraph} from '../../styles'
import { Button } from '../Forms/Button'  





// HOME PRESENTATION


const SectionPresentation = styled.section`
  padding-bottom:200px; 
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
  max-width:550px;
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
      Tenho 28 anos e moro em São Paulo.<br></br>
      Me especializei e obtive experiências e certificações no desenvolvimento web.
      Utilizando Javascript, seus frameworks e algumas outras tecnologias, 
      podemos alavancar negócios com a construção de sites e aplicativos.
      </ParagraphPresentation>
      <DivFlex>
        <Button to="portfolio">Meu Portfólio</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}