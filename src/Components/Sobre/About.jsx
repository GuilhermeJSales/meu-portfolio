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
              Sou um desenvolvedor web front-end, com experiência 
              na criação de diversos sites. Apaixonado por tecnologia,
              estou cursando superior em Analise e Desenvolvimento
              de Sistemas e coleciono alguns certificados de linguagens
              e frameworks da web.
              </Paragraph>
            </SobreDiv>


            <SobreDiv>          
              <SubTitleAll data-aos="fade-right" data-aos-duration="1500">Designer</SubTitleAll>          
              <Paragraph data-aos="fade-right" data-aos-duration="1600">
              Apaixonado por design desde cedo, aprendi a utilizar alguns softwares de edição somente com vídeos tutoriais do Youtube.
              Possuo experiência em design para mídias sociais e construção de layouts para sites. 
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