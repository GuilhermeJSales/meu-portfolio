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
      Seja bem vindo ao meu portfolio!<br></br>
      Tenho 28 anos e moro em São Paulo. Sou apaixonado por tecnologia e praticidade. Sempre fui muito perfeccionista(com datas e detalhes),
      por isso procuro me manter sempre atualizado com as melhores tendências do mercado, fazendo assim um trabalho cada vez melhor.
      </ParagraphPresentation>
      <DivFlex>
        <Button to="projetos">Meus Projetos</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}