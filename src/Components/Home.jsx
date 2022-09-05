import styled from "styled-components";
import {Presentation} from "./Sobre/Presentation";
import { About } from "./Sobre/About";
import { Exp } from "./Sobre/Exp";



const MainConfigs = styled.main`
  max-width:1600px;
  width:100%;
  min-height:100vh;
  margin:0 auto;
  padding: 0 150px;
  @media (max-width: 48rem){
    padding:0 50px;
  }  @media (max-width: 38rem){
    padding:0 25px;
  } 
`

export const Home = () => {
  return (
    <MainConfigs>
        <Presentation />
        <About />
        <Exp/>
    </MainConfigs>
  )
}