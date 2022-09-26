import styled from "styled-components";
import {Presentation} from "./Sobre/Presentation";
import { About } from "./Sobre/About";
import { Exp } from "./Sobre/Exp";
import { MainConfigs } from "../styles";






export const Home = () => {
  return (
    <>
      <Presentation />
      <About />
      <Exp />
    </>
  )
}