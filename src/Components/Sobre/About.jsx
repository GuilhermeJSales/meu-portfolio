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
  width:300px;
  height:445px;
  background-image: url(${Photo});
  background-size:cover;
  transition: .3s ease-in-out;
  position: relative;
  border-radius:3rem;
  overflow:hidden;
  transform:rotate(10deg);
  &:hover{
  transform:rotate(0);
  }  
  @media (max-width:425px){
    width:200px;
    height:345px;
  }
   @media (max-width:320px){
    width:150px;
    height:245px;
  } 
  `;


const  ImgDiv = styled.div`
  align-self:center;
  background:linear-gradient(-45deg, transparent, #4E2C26, transparent);
  aspect-ratio:1/1;
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
                Me especializei no desenvolvimento front-end e estou em constante evolução para aproveitar as tendências do mercado. 
                Sempre fui apaixonado por programação e durante esse tempo obtive experiências no desenvolvimento de alguns sites, na maioria das vezes para divulgação dos serviços dos clientes e criação de um meio mais eficiente de comunicação. <br></br>
                Atualmente além de estar cursando o ensino superior em Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul, também estou realizando a certificação de NextJS da Origamid e de Java da Cod3r.
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