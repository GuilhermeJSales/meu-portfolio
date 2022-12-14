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
                Sempre fui apaixonado por programação, me lembro de ler muito sobre esse tema quando era bem mais novo, o que me fez interessar pela área. Durante esse tempo
                obtive experiências no desenvolvimento de alguns sites, na maioria das vezes para divulgação dos serviços dos clientes e criação de um meio mais eficiente de comunicação,
                também obtive certificações de algumas tecnologias como o Javascript e ReactJS. <br></br>
                Atualmente estou estudando Typescript, futuramente pretendo estudar o NodeJS e obter um diploma de nível Superior.
              </Paragraph>
            </SobreDiv>


            <SobreDiv>          
              <SubTitleAll data-aos="fade-up" data-aos-duration="1500">Designer</SubTitleAll>          
              <Paragraph data-aos="fade-up" data-aos-duration="1600">
                Sempre fui muito interessado também na criação de imagens e conteúdos para redes sociais. 
                No começo eu administrava comunidades do Orkut e para manter a qualidade das mesmas, tive que aprender a trabalhar com o Photoshop, através de vídeo aulas da internet.
                Juntei o útil ao agradável e durante algum tempo trabalhei como um designer freelance para empresas de pequeno/médio porte, buscando sempre alavancar as marcas e conseguir mais clientes através das plataformas ou até de cartões de visita.
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