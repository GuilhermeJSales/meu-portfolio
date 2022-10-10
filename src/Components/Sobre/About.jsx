import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import PhotoOpacity from '../../Assets/foto-opacity.png'
import { Technologies } from './Technologies';




// ABOUT SECTION

const AboutSection = styled.section`
    padding-bottom:200px; 
    margin: 0 auto;
`;

const AboutSect = styled.div `
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:50px;
  @media (max-width:70rem){
    grid-template-columns:1fr;
  }
`;


const  SobreDiv = styled.div`
  margin-bottom: 50px;
`;

const MyImage = styled.div`
  width:352px;
  height:330px;
  background-image: url(${PhotoOpacity});
  background-size:cover;
  transition: .3s ease-in-out;
  position: relative;
  &:hover{
  width:362px;
  height:340px;
  }
  `;

const  ImgDiv = styled.div`
  justify-self:start;
  align-self:flex-end;
  @media (max-width:70rem){
    margin-bottom:30px;
  }
  @media (max-width:49rem){
    display:none;
  } 
`;
export const About = () => {


  return (
    
    <AboutSection>
      <AboutSect>
        <div>
            <SobreDiv>
              <SubTitleAll data-aos="fade-right" data-aos-duration="1500">Desenvolvedor</SubTitleAll>          
              <Paragraph data-aos="fade-right" data-aos-duration="1600">
                Em constante evolução para aproveitar as tendências do mercado futuro, me especializei no desenvolvimento front-end.
                Sempre fui apaixonado por programação, me lembro de ler muito sobre esse tema quando era bem mais novo, o que me fez me interessar pela área, durante esse tempo
                obtive experiências no desenvolvimento de alguns sites e aplicativos para web, como também a conclusão de cursos para certificação em algumas tecnologias.
              </Paragraph>
            </SobreDiv>


            <SobreDiv>          
              <SubTitleAll data-aos="fade-right" data-aos-duration="1500">Designer</SubTitleAll>          
              <Paragraph data-aos="fade-right" data-aos-duration="1600">
                Sempre fui muito interessado também na criação de imagens e conteúdos para redes sociais. 
                No começo eu administrava comunidades do Orkut e para manter a qualidade das mesmas, tive que aprender a trabalhar com o Photoshop, através de vídeo aulas da internet.
                Juntei o útil ao agradável e durante algum tempo, trabalhei como um designer freelance para empresas de baixo/médio porte.
              {/* Apaixonado por design desde cedo, aprendi a utilizar alguns softwares de edição somente com vídeos tutoriais do Youtube.
              Possuo experiência em design para mídias sociais e construção de layouts para sites.  */}
              </Paragraph>
            </SobreDiv>

        </div>
        <ImgDiv data-aos="zoom-in" data-aos-duration="1500">
          <MyImage/>
        </ImgDiv>
        
        </AboutSect>
        <Technologies />
    </AboutSection>
    
  )
}