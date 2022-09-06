import styled from "styled-components";
import {SubTitleAll, ThirdTitle} from "../../styles"
import { useRef, useState } from "react";
import { ExpButton } from "../Forms/ExpButton";
import { CSSTransition } from 'react-transition-group';


// MY EXPERIENCIES 

const ExpSection = styled.section`
  min-height:50vh;
  max-width:800px;
  margin:0 auto;
`;


const DivFlexExp = styled.div`
  display:flex;
  max-width:800px;
  gap:1.25rem;
  position:relative;
  margin:0 auto;
  @media (max-width:54rem){
    flex-direction:column;    
  }
`;


const DivButtonFlex = styled.div`
  flex: 1;
  max-width:100%;
  @media (max-width:54rem){
    display:flex;
    overflow-x:auto;
    position:relative;
  }&::-webkit-scrollbar-track {
    background-color: #3333;
  }&::-webkit-scrollbar {
    width: 6px;
    background: #3333;
}&::-webkit-scrollbar-thumb {
    background: #333;
    border-radius:6px;
}
`;

const CssTest = styled.li`
&.my-node-enter {
  opacity: 0;
}
&.my-node-enter-active {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}
&.my-node-enter-done {
  opacity: 1;
}&.my-node-exit {
  opacity: 0;
}
&.my-node-exit-active {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}
&.my-node-exit-done {
  opacity: 1;
}
`


const ExpName = styled.h4`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-style:italic;
  color:#E0E0E0;
  margin-bottom:1rem;
`;

const ExpSpanName = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-style:normal;
  color:#F29602;
  `;


const ExpParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size:.875rem;
  color:#E0E0E0;
`

const DivScroll = styled.div`
position:absolute;
background:#F29602;
width:2px;
height:41px;
top:0;
left:0;
transform: ${({scrollButton}) => scrollButton};
transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
@media (max-width:54rem){
  top: 0;
  bottom:auto;
  width:300px;
  height:2px;
  }
`




export const Exp = () => {

  const exp = [
      {id: 0, empresa:"Máxima Voip", cargo:'Suporte Técnico',  description:"Suporte Técnico via chat para os clientes, criação de novos ambientes, configurações de conta voip e treinamento de novos clientes."},
      {id: 1, empresa:"Agência R3", cargo:'Desenvolvedor WordPress', description:"Desenvolvimento de sites via WordPress, editando na maioria das vezes temas premium, ou criando novos através de plugins da plataforma."},
      {id: 2, empresa:"Freelance", cargo:'Social Media', description:"Desenvolvimento de artes para redes sociais de clientes de diversos tipos de segmentos. Criação de story, post-image e também cartões de visita."},
  ];

  const [job, setJob] = useState(0);
  const [anima, setAnima] = useState(false);
  const [scrollButton, setScrollButton] = useState('');
  const nodeRef = useRef(null);


  return( 
   <ExpSection>
    <div>
    <SubTitleAll>Experiências</SubTitleAll>
    <ThirdTitle>Experiências relacionadas a área de Tecnologia</ThirdTitle>
    </div>
    <DivFlexExp>
      <DivButtonFlex>
   {exp.map(e => <ExpButton setScrollButton={setScrollButton} anima={anima} setAnima={setAnima} job={job} setJob={setJob} key={e.id} id={e.id}>{e.cargo}</ExpButton>)}
      <DivScroll scrollButton={scrollButton}></DivScroll>
      </DivButtonFlex>
   {job === exp[job].id &&    
   <ul style={{flex:1, maxWidth:'100%'}}>
    <CSSTransition
      in={anima} 
      timeout={500} 
      classNames="my-node" 
      ref={nodeRef}
    >
    <CssTest ref={nodeRef}>
      <ExpName>{exp[job].cargo} <ExpSpanName>{`❖ ${exp[job].empresa}`}</ExpSpanName></ExpName>
      <ExpParagraph>{exp[job].description}</ExpParagraph>
    </CssTest>
    </CSSTransition>
   </ul>
   }

   </DivFlexExp>
   </ExpSection>
  )
}