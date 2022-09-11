import { useRef } from 'react';
import styled from 'styled-components';
import { useScrollAnima } from '../../Hooks/useScrollAnima';
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
    <SectionPresentation className="init-hidden">
      <Span>Olá, meu nome é</Span>
      <Title>Guilherme Jesus Sales.</Title>
      <SubTitle>Sou desenvolvedor front-end.</SubTitle>
      <ParagraphPresentation>
      Sou um "construtor" de sites.
      Sou aficionado em tecnologia, procuro sempre me manter atualizado, por isso tenho diversos certificados em linguagens de programação e seus frameworks, busco todos os dias aprimorar meus conhecimentos para melhor atender as expectativas dos clientes.<br></br>Bem-vindo ao meu Portfólio!
      </ParagraphPresentation>
      <DivFlex>
        <Button margin={'3.125rem'} to="portfolio">Meu Portfólio</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}