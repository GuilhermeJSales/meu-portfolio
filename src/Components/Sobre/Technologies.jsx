import styled from 'styled-components';
import { Link } from "react-router-dom"
import {specializations} from "../../utils/Specializations-object"


const  TecDiv = styled.ul`
  display:grid;
  grid-template-columns:repeat(9, 60px);
  gap:1.5rem;
  align-items:center;
  margin-top:30px;
  text-align:center;
  @media (max-width:768px){
    justify-content:center;
    grid-template-columns:repeat(3,60px);
  }
  @media (max-width:425px){
    grid-template-columns:repeat(3,60px);
  }
  @media (max-width:320px){
    grid-template-columns:repeat(3,45px);
  }
`;

const CertificateTitle = styled.h3`
  font-size:1.2rem;
  color:#e0e0e0;
  margin-top:30px;
  @media (max-width:768px){
    text-align:center;
  }
  @media (max-width:425px){
    font-size:.875rem;
  }
`


const TecLink = styled(Link)`
  background:#1F1F1F;
  padding:10px;
  outline: 2px solid #474747;
  border: 3px solid #141414;
  display:block;
  cursor:pointer;
  transition: .3s ease-in-out;
  margin-bottom:2px;
  &:hover,
  &:focus{
    background:#3333;
    border: 3px solid #141414;
    outline: 2px solid #F29602;
    transform:scale(1.1);
  }
  @media (max-width:320px){
    padding:5px;
  }
`


const  TecSpan = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:.75rem;  
  font-style:italic;
  color:#E0E0E0;
  @media (max-width:320px){
    font-size:.5rem;
  }
`;

export const Technologies = () => {
  return (
    <>
    <CertificateTitle data-aos="fade-up"  data-aos-duration="2000">Conheça as tecnologias e visualize meus certificados:</CertificateTitle>
   <TecDiv>   
   {specializations.map((specializations) => <li  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" data-aos-delay={specializations.duration} key={specializations.id}><TecLink to={`tecnologia/${specializations.name}`}><img src={specializations.logo}/></TecLink><TecSpan>{specializations.name}</TecSpan></li>)}
   </TecDiv>
   </>
  )
}