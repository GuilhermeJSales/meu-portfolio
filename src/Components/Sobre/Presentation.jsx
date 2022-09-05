import styled from 'styled-components';
import {Title, Paragraph} from '../../styles'
import { Button } from '../Forms/Button'





// HOME PRESENTATION


const SectionPresentation = styled.section`
  min-height:calc(100vh - 161px);
  padding-top:140px;
  @media(max-width:63rem) {
    min-height:100vh;
  }
`;

const Span = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:clamp(1rem,2vw, 1.3rem);
  color:#F29602;
`;


const SubTitle = styled.h2`
  font-family:'Roboto', sans-serif;
  font-size:clamp(1.5rem, 5vw, 5rem);
  color:#9F9F9F;
`;

const ParagraphPresentation = styled(Paragraph)`
  margin: 1.875rem 0 1.875rem;
  max-width:600px;
`;

const DivFlex = styled.div`
display:flex;
align-items:center;
`;



export const Presentation = () => {
  return (
    <SectionPresentation>
      <Span>Olá, meu nome é</Span>
      <Title>Guilherme Jesus Sales.</Title>
      <SubTitle>Sou desenvolvedor front-end.</SubTitle>
      <ParagraphPresentation>
      Construo sites para web e estou me aprimorando cada dia mais para atender as expectativas dos clientes.
      Atualmente estou cursando Análise e Desenvolvimento de Sistemas e concluindo cursos de certificações em linguagens de programação e frameworks através de plataformas online.


      </ParagraphPresentation>
      <DivFlex>
        <Button margin={'3.125rem'} to="portfolio">Meu Portfólio</Button>    
      </DivFlex>
    </SectionPresentation>
  )
}