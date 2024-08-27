import styled from 'styled-components';
import {Paragraph, SubTitleAll} from "../../styles"
import Photo from '../../Assets/minhafoto.png'
import { Technologies } from './Technologies';




// ABOUT SECTION

const AboutSection = styled.section`
    padding-bottom:200px; 
    margin: 0 auto;
    @media (max-width:1024px){
      padding-bottom:100px; 
  }
`;

const AboutSect = styled.div `
  display:flex;
  justify-content:space-between;
  gap:60px;
  @media (max-width:1024px){
    flex-direction:column;
  }
`;


const  SobreDiv = styled.div`
&:first-child{
  margin-bottom: 50px;
}
`;

const MyImage = styled.div`
  width:400px;
  height:445px;
  background-image: url(${Photo});
  background-size:cover;
  background-position:center;  
  @media (max-width:450px){
    width:300px;
    height:345px;
  }
   @media (max-width:320px){
    width:150px;
    height:245px;
  } 
  `;


const  ImgDiv = styled.div`
  align-self:center;
 
  border-radius:3rem;
  @media (max-width:70rem){
    margin-bottom:30px;
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
              Com mais de 4 anos de experiência em desenvolvimento, sou especializado em front-end, com sólidos conhecimentos em JavaScript, ReactJS e NextJS. Minha paixão por programação me levou a criar diversas soluções digitais, principalmente voltadas à divulgação de serviços. Também tenho uma base sólida em back-end, utilizando NodeJS, PHP e Java.<br></br> Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e aprofundando meus conhecimentos em Java para me alinhar ainda mais aos requisitos do mercado de trabalho.
                
              </Paragraph>
            </SobreDiv>

        </div>
        <ImgDiv data-aos="zoom-in" data-aos-duration="1500">
          <MyImage/>
        </ImgDiv>
        
        </AboutSect>
        <div>
        <Technologies />
        </div>
    </AboutSection>
    
  )
}