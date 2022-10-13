import {Helmet} from "react-helmet";
import {Presentation} from "./Sobre/Presentation";
import { About } from "./Sobre/About";
import { Exp } from "./Sobre/Exp";
;







export const Home = () => {
  return (
    <>
    <Helmet
    title="Home - Guilherme J. Sales - Desenvolvedor Front-end" 
    description="Meu nome é Guilherme J. Sales e sou dev front end. Atuo na criação de sites e possuo sólidos conhecimento em HTML5, CSS3, Javascript e ReactJS"
    />
      <Presentation />
      <About />
      <Exp />
    </>
  )
}