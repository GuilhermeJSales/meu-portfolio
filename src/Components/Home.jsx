import {Presentation} from "./Sobre/Presentation";
import { Container } from "../styles";
import { About } from "./Sobre/About";
import { Experiences } from "./Sobre/Experiences";


export const Home = () => {
  return (
    <main>
      <Container>
        <Presentation />
        <About />
        <Experiences />
      </Container>
      </main>
  )
}