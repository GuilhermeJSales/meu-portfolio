import { useRef, useState } from "react";
import { CssTest, DivButtonFlex, DivFlexExp, DivScroll, ExpName, ExpParagraph, ExpSpanName, SubTitleAll, ThirdTitle } from "../../styles";
import { ExpButton } from "../Forms/ExpButton";
import { CSSTransition } from 'react-transition-group';




export const Exp = () => {

  const exp = [
      {id: 0, empresa:"Máxima Voip", cargo:'Suporte Técnico',  description:"Suporte Técnico via chat para os clientes, criação de novos ambientes, configurações de conta voip e treinamento de novos clientes."},
      {id: 1, empresa:"Agência R3", cargo:'Desenvolvedor WordPress', description:"Desenvolvimento de sites via WordPress, editando na maioria das vezes temas premium, ou criando novos através de plugins da plataforma."},
      {id: 2, empresa:"Freelance", cargo:'Social Media', description:"Desenvolvimento de artes para redes sociais de clientes de diversos tipos de segmentos. Criação de story, post-image e também cartões de visita."},
  ];

  const [job, setJob] = useState(0);
  const [anima, setAnima] = useState(false);
  const [scrollButton, setScrollButton] = useState(0);
  const nodeRef = useRef(null);

  


  return( 
   <section>
    <SubTitleAll>Minhas Experiências</SubTitleAll>
    <ThirdTitle>Experiências relacionadas a área de Tecnologia</ThirdTitle>
    <DivFlexExp>
      <DivButtonFlex>
   {exp.map(e => <ExpButton setScrollButton={setScrollButton} anima={anima} setAnima={setAnima} job={job} setJob={setJob} key={e.id} id={e.id}>{e.cargo}</ExpButton>)}
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
    <DivScroll scrollButton={`translateY(${scrollButton})`}></DivScroll>
   </DivFlexExp>
   </section>
  )
}