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
      <SubTitle>Sou desenvolvedor full stack.</SubTitle>
      <ParagraphPresentation>
      Com mais de 4 anos de experiência na área de desenvolvimento, venho aprimorando minhas habilidades em diversas tecnologias, incluindo JavaScript, ReactJS, NextJS, NodeJS, PHP e Java. Minha trajetória me proporcionou sólidos conhecimentos tanto no frontend quanto no backend, permitindo que eu desenvolva soluções robustas e escaláveis.
      </ParagraphPresentation>
      <DivFlex>
        <Button to="projetos">Meus Projetos</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}