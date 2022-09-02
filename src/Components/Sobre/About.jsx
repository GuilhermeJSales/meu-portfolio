import {ReactComponent as LogoTipo} from '../../Assets/sobre-logo.svg'
import {SectionAll, AboutSect,SubTitleAll, ParagraphAbout, ImgDiv} from "../../styles"
import { Tecnologies } from './Tecnologies'

export const About = () => {
  return (

    <>
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
    </>
  )
}