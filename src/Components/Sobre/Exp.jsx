import { useRef, useState } from "react";
import { CssTest, DivFlexExp, ExpName, ExpParagraph, ExpSpanName } from "../../styles";
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
  const nodeRef = useRef();


  return( 
   <section>
    <DivFlexExp>
      <div>
   {exp.map(e => <ExpButton anima={anima} setAnima={setAnima} job={job} setJob={setJob} key={e.id} id={e.id}>{e.cargo}</ExpButton>)}
      </div>
   {job === exp[job].id &&    
   <ul>
    <CSSTransition
   in={anima} timeout={500} classNames="my-node" ref={nodeRef}>
    <CssTest>
      <ExpName>{exp[job].cargo} <ExpSpanName>{`❖ ${exp[job].empresa}`}</ExpSpanName></ExpName>
      <ExpParagraph>{exp[job].description}</ExpParagraph>
    </CssTest>
    </CSSTransition>
   </ul>
   }
   </DivFlexExp>
   </section>
  )
}