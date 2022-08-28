import {Presentation} from "./Sobre/Presentation";
import { Container } from "../styles";
import { About } from "./Sobre/About";


export const Home = () => {
  return (
    <main>
      <Container>
        <Presentation />
        <About />
      </Container>
      </main>
  )
}