import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import {ReactComponent as LogoTipo} from '../../Assets/sobre-logo.svg'
import { Tecnologies } from './Tecnologies'

// ABOUT SECTION

const AboutSection = styled.section`
  min-height:70vh;
  padding-top:20px;
  @media (max-width:69rem){
    padding-top:0;
    min-height:90vh;
  }
`;

const AboutSect = styled.div `
  display:grid;
  grid-template-columns: 700px auto;
  align-items:center;
  @media (max-width:69rem){
    grid-template-columns:1fr;
  }
`;


const ParagraphAbout = styled(Paragraph)`
  max-width:600px;
`;

const  ImgDiv = styled.div`
  max-width:100%;
  justify-self:center;
  @media (max-width:75rem){
    display:none;
  }
`;
export const About = () => {
  return (
    <AboutSection>
      <AboutSect>
        <div>
          <SubTitleAll>Sobre Mim</SubTitleAll>
          <ParagraphAbout>
            Olá! Meu nome é Guilherme Jesus Sales. 
            Me lembro que comecei a me interessar por desenvolvimento web quando podíamos estilizar páginas do Orkut com HTML,
            desde então sou apaixonado em criação de sites e layouts. Quebrar a cabeça para fazer algumas linhas de código e depois ver
            aquele resultado na tela se tornou uma de minhas felicidades.<br></br>
            <br></br>Hoje faço trabalhos freelances para algumas agências de marketing, 
            mas não fico apenas no "codar", também crio logotipos e imagens para mídias sociais.<br></br>
            <br></br>Enfim, aqui vão algumas tecnologias e softwares que possuo experiências:
          </ParagraphAbout>
          <Tecnologies />
        </div>

        <ImgDiv>
          <LogoTipo/>
        </ImgDiv>
        </AboutSect>
    </AboutSection>
  )
}