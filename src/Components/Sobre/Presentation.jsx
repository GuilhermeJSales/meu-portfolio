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
      Sou estudante de Análise e Desenvolvimento de Sistemas e já acumulo experiência significativa em desenvolvimento de sites, criação de layouts e design para mídias sociais. Ao longo das minhas oportunidades como desenvolvedor, busquei constantemente agregar valor às empresas onde estive, aplicando todo o meu conhecimento para conduzir projetos de forma eficaz e oferecer suporte aos colegas de equipe. Esta abordagem resultou em altos índices de produtividade na entrega de projetos e em um ambiente de trabalho colaborativo e positivo. Possuo mais de 6 anos de experiência trabalhando com tecnologia, com foco especialmente em JavaScript, TypeScript, React, Next.js, além de utilizar bibliotecas como Tailwind CSS, e também tenho conhecimento em CMS WordPress.
      </ParagraphPresentation>
      <DivFlex>
        <Button to="projetos">Meus Projetos</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}