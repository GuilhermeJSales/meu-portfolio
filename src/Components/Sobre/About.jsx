import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import Photo from '../../Assets/minhafoto.png'
import { Technologies } from './Technologies';




// ABOUT SECTION

const AboutSection = styled.section`
    padding-bottom:200px; 
    margin: 0 auto;
    @media (max-width:56.25rem){
      padding-bottom:100px; 
  }
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
  width:355px;
  height:500px;
  background-image: url(${Photo});
  background-size:cover;
  transition: .3s ease-in-out;
  position: relative;
  border-radius:3rem;
  overflow:hidden;
  transform:rotate(10deg);
  &:hover{
  transform:rotate(0);
  }  @media (max-width:38.125rem){
    width:200px;
    height:345px;
  } 
  `;


const  ImgDiv = styled.div`
  justify-self:center;
  align-self:flex-end;
  background:linear-gradient(-45deg, transparent, #4E2C26, transparent);
  aspect-ratio:1/1;
  border-radius:3rem;
  @media (max-width:70rem){
    margin-bottom:30px;
    justify-self:flex-start;
  }
`;
export const About = () => {


  return (
    
    <AboutSection>
      <AboutSect>
        <div>
            <SobreDiv>
              <SubTitleAll data-aos="fade-up" data-aos-duration="1500">Desenvolvedor</SubTitleAll>          
              <Paragraph data-aos="fade-up" data-aos-duration="1600">
                Em constante evolução para aproveitar as tendências do mercado futuro, me especializei no desenvolvimento front-end.
                Sempre fui apaixonado por programação, me lembro de ler muito sobre esse tema quando era bem mais novo, o que me fez me interessar pela área, durante esse tempo
                obtive experiências no desenvolvimento de alguns sites e aplicativos para web, como também a conclusão de cursos para certificação em algumas tecnologias.
              </Paragraph>
            </SobreDiv>


            <SobreDiv>          
              <SubTitleAll data-aos="fade-up" data-aos-duration="1500">Designer</SubTitleAll>          
              <Paragraph data-aos="fade-up" data-aos-duration="1600">
                Sempre fui muito interessado também na criação de imagens e conteúdos para redes sociais. 
                No começo eu administrava comunidades do Orkut e para manter a qualidade das mesmas, tive que aprender a trabalhar com o Photoshop, através de vídeo aulas da internet.
                Juntei o útil ao agradável e durante algum tempo, trabalhei como um designer freelance para empresas de pequeno/médio porte.
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