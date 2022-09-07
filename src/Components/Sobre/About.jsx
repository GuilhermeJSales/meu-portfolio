import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import {ReactComponent as LogoTipo} from '../../Assets/sobre-logo.svg'
import { Tecnologies } from './Tecnologies'

// ABOUT SECTION

const AboutSection = styled.section`
    padding-bottom:200px; 
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
  max-width:550px;
`;

const  ImgDiv = styled.div`
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
            Olá, meu nome é Guilherme Jesus Sales, tenho 28 anos e sou desenvolvedor front-end.
            Possuo experiências com desenvolvimento de sites WordPress e alguns projetos utilizando HTML5, CSS3, Javascript ES6+ e ReactJS. <br></br>
           <br></br>Sempre gostei muito de tecnologia, por isso desde cedo eu estudo os mais variados temas sobre a mesma. Primeiramente me apaixonei pelo Photoshop, algo que utilizo até hoje para alguns trabalhos freelance, criando logotipos e artes para mídias sociais.
           Após isso, me interessei pela programação ainda na época do Orkut, onde mergulhava nos conteúdos de diversas comunidades e fóruns da plataforma.<br></br> 
           <br></br>Enfim, já tive algumas experiências fazendo o que amo, inclusive isso me deu oportunidade de aprender e as vezes até me certificar nas tecnologias e softwares abaixo:
           <br></br><br></br>
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