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
      Atualmente cursando Análise e Desenvolvimento de Sistemas, possuo experiências com desenvolvimento de sites, criação de layouts e artes para mídias sociais.
        Nas oportunidades que tive de trabalhar como desenvolvedor, procurei sempre agregar grande valor à empresa, utilizando todo o meu conhecimento para desenvolver
         os projetos e auxiliar os colegas de equipe, gerando assim um alto rendimento na entrega dos projetos e um bom relacionamento com a equipe. 
         Trabalho com tecnologia há mais de 6 anos na maioria das vezes utilizando JavaScript, TypeScript, React, Next, bibliotecas como por exemplo o TailwindCSS e também o CMS WordPress. 
      </ParagraphPresentation>
      <DivFlex>
        <Button to="projetos">Meus Projetos</Button>  
      </DivFlex>
    </SectionPresentation>
    

  )
}