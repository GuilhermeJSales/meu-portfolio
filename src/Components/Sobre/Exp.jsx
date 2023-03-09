import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from "react";
import {SubTitleAll, ThirdTitle} from "../../styles"
import { ExpButton } from "../Forms/ExpButton";


// MY EXPERIENCIES 

const ExpSection = styled.section`
  max-width:800px;
  margin:0 auto 100px;
`;


const DivFlexExp = styled.div`
  display:flex;
  max-width:800px;
  gap:1.25rem;
  position:relative;
  margin:0 auto;
  @media (max-width:850px){
    flex-direction:column;    
  }
`;


const DivButtonFlex = styled.div`
  flex: 1;
  max-width:100%;
  @media (max-width:850px){
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

const LiTransition = styled.li`
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
`;

const ExpSpanName = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-style:normal;
  color:#F29602;
  `;

const ExpDate = styled.span`
font-family: 'Roboto', sans-serif;
font-size: .625rem;
color: #F29602;
`


const ExpParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size:.875rem;
  color:#E0E0E0;
  margin-top: 1rem;
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
@media (max-width:850px){
  top: 0;
  bottom:auto;
  width:300px;
  height:2px;
  }
`




export const Exp = () => {

  const exp = [
      {id: 0, data:"03/23 a atual", empresa:"Integração Digital", cargo:'Desenvolvedor Front End',  description:"Desenvolvimento e manutenção de websites, landing pages e e-commerces, utilizando JavaScript, PHP, HTML5, CSS3 e WordPress."},
      {id: 1, data:"05/22 a 10/22", empresa:"Máxima Voip", cargo:'Suporte Técnico',  description:"Suporte Técnico via chat para os clientes, criação de novos ambientes, configurações de conta voip e treinamento de novos clientes."},
      {id: 2, data:"01/22 a 06/22", empresa:"Agência R3", cargo:'Desenvolvedor WordPress', description:"Desenvolvimento de sites via WordPress, editando na maioria das vezes temas premium, ou criando novos através de plugins da plataforma."},
      {id: 3, data:"10/18 a 12/22", empresa:"Freelance", cargo:'Social Media', description:"Desenvolvimento de artes para redes sociais de clientes de diversos tipos de segmentos. Criação de story, post-image e também cartões de visita."},
      {id: 4, data:"05/19 a 10/19", empresa:"Omnibees", cargo:'Analista de Suporte', description:"Prestando suporte técnico sobre configurações dos softwares oferecidos pela empresa aos hotéis. Tentando entender regras de negócios dos clientes para uma melhor configuração do sistema para os mesmos."},
      
  ];

  const [job, setJob] = useState(0);
  const [anima, setAnima] = useState(false);
  const [scrollButton, setScrollButton] = useState('');
  const nodeRef = useRef(null);


  return( 
   <ExpSection>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <SubTitleAll>Experiências</SubTitleAll>
    <ThirdTitle>Experiências relacionadas a área de Tecnologia</ThirdTitle>
    </div>
    <DivFlexExp data-aos="fade-up"  data-aos-duration="2000">
   
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
    <LiTransition ref={nodeRef}>
      <ExpName>{exp[job].cargo} <ExpSpanName>{`❖ ${exp[job].empresa}`}</ExpSpanName></ExpName>
      <ExpDate>{exp[job].data}</ExpDate>
      <ExpParagraph>{exp[job].description}</ExpParagraph>
    </LiTransition>
    </CSSTransition>
   </ul>
   }

   </DivFlexExp>
   </ExpSection>
  )
}