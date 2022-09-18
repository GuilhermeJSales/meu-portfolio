import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import PhotoHover from '../../Assets/foto-hover.png'
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
  transition: 1s ease-in-out;
  position: relative;
  &:hover{
  background-image: url(${PhotoHover});
  }&:after{
    content:"";
    width:352px;
    height:330px;
    background:#333;
    opacity:.3;
    border-radius:0 120px 120px 120px;
    display:block;
    position:absolute;
    left:15px;
    top:10px;
    transition: .5s ease-in-out;
  }&:hover:after{
    opacity:.1;
    left:0;
    top:0;
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
    
    <AboutSection className='init-hidden'>
      <AboutSect>
        <div>
            <SobreDiv>
              <SubTitleAll>Desenvolvedor</SubTitleAll>          
              <Paragraph>
              Sou um desenvolvedor web front-end, com experiência 
              na criação de diversos sites. Apaixonado por tecnologia,
              estou cursando superior em Analise e Desenvolvimento
              de Sistemas e coleciono alguns certificados de linguagens
              e frameworks da web.
              </Paragraph>
            </SobreDiv>


            <SobreDiv>          
              <SubTitleAll>Designer</SubTitleAll>          
              <Paragraph>
              Apaixonado por designer desde cedo, aprendi a utilizar alguns softwares de edição somente com vídeos tutoriais do Youtube.
              Possuo experiência em design para mídias sociais e construção de layouts para sites. 
              </Paragraph>
            </SobreDiv>

        </div>
        <ImgDiv>
          <MyImage/>
        </ImgDiv>
        
        </AboutSect>
        <Technologies />
    </AboutSection>
    
  )
}