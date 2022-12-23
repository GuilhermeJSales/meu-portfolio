import { useScrollAnima } from "../Hooks/useScrollAnima";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";
import { ProjectContent } from "./Projetos/ProjectContent";
import { ThirdTitle, Title } from "../styles";
import { useEffect } from "react";



export const Projects = () => {
  const ref = useRef();
  const focusRef = useRef();
  
  // ANIMA AO SCROLL TODA VEZ QUE ALTERA A ROTA.
  const {pathname} = useLocation();
  useScrollAnima('.init-hidden', 'init-hidden-off',pathname);

  useEffect(() => {
      <Helmet
          title="Projetos - Guilherme J. Sales - Desenvolvedor Front-end" 
          description="Olá! Meu nome é Guilherme Jesus Sales e sou desenvolvedor front-end. Esses são os projetos que já conclui."
      />
  },[])


return (
  <>
  

  <section className="init-hidden" style={{minHeight:'100vh', paddingBottom:"120px"}}>
      <Title ref={focusRef}>Projetos</Title>
      <ThirdTitle>Conheça os projetos que já realizei:</ThirdTitle>
      <ProjectContent contRef={ref}/>
  </section>
  <div ref={ref}></div>
  </>
  )
}
