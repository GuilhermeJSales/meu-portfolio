import styled from "styled-components";
import {Presentation} from "./Sobre/Presentation";
import { About } from "./Sobre/About";
import { Exp } from "./Sobre/Exp";
import { useLocation } from "react-router-dom";
import { useScrollAnima } from "../Hooks/useScrollAnima";



const MainConfigs = styled.main`
  max-width:1600px;
  width:100%;
  min-height:100vh;
  margin:0 auto;
  padding: 0 150px;
  z-index:-1;
  @media (max-width: 48rem){
    padding:0 50px;
  }  @media (max-width: 38rem){
    padding:0 25px;
  } 
`

export const Home = () => {
  // ANIMA AO SCROLL TODA VEZ QUE ALTERA A ROTA.
  const {pathname} = useLocation();
  // useScrollAnima('.init-hidden', 'init-hidden-of',pathname);

  return (
    <MainConfigs>
        <Presentation />
        <About />
        <Exp/>
    </MainConfigs>
  )
}