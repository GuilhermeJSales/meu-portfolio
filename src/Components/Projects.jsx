import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScrollAnima } from "../Hooks/useScrollAnima";
import { ProjectContent } from "./Projetos/ProjectContent";



export const Projects = () => {
  const ref = useRef();
  
  // ANIMA AO SCROLL TODA VEZ QUE ALTERA A ROTA.
  const {pathname} = useLocation();
  useScrollAnima('.init-hidden', 'init-hidden-off',pathname);
  

return (
  <>
  <section className="init-hidden" style={{minHeight:'100vh'}}>
      <ProjectContent contRef={ref}/>
  </section>
  <div ref={ref}></div>
  </>
  )
}
