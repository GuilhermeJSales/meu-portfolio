import {Presentation} from "./Sobre/Presentation";
import { Container } from "../styles";
import { About } from "./Sobre/About";
import { Exp } from "./Sobre/Exp";


export const Home = () => {
  return (
    <main>
      <Container>
        <Presentation />
        <About />
        <Exp/>
      </Container>
      </main>
  )
}