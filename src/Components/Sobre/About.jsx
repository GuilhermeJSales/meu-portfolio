import {ReactComponent as LogoTipo} from '../../Assets/sobre-logo.svg'
import {AboutSect,TitleAbout, ParagraphAbout, ImgDiv} from "../../styles"
import { Tecnologias } from './Tecnologias'

export const About = () => {
  return (
    <AboutSect>
      <div>
        <TitleAbout>Sobre Mim</TitleAbout>
        <ParagraphAbout>
          Olá! Meu nome é Guilherme Jesus Sales. 
          Me lembro que comecei a me interessar por desenvolvimento web quando podíamos estilizar páginas do Orkut com HTML,
          desde então sou apaixonado em criação de sites e layouts. Quebrar a cabeça para fazer algumas linhas de código e depois ver
          aquele resultado na tela se tornou uma de minhas felicidades.
          Hoje faço trabalhos freelances para algumas agências de marketing, 
          mas não fico apenas no "codar", também crio logotipos e imagens para mídias sociais.
          Enfim, aqui vão algumas tecnologias e softwares que possuo experiências:
        </ParagraphAbout>
        <Tecnologias />
      </div>

      <ImgDiv>
        <LogoTipo/>
      </ImgDiv>
    </AboutSect>
  )
}