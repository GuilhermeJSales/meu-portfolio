import styled from 'styled-components';
import { Link } from "react-router-dom"
import {api} from "../../api"


const  TecDiv = styled.ul`
  display:grid;
  grid-template-columns:repeat(7, 60px);
  gap:1.5rem;
  align-items:center;
  margin-top:2rem;
  text-align:center;
  @media (max-width:44rem){
    grid-template-columns:repeat(4,60px);
  }
  @media (max-width:25rem){
    grid-template-columns:repeat(3,60px);
  }
`;

const CertificateTitle = styled.span`
  font-size:1.5rem;
  color:#e0e0e0;
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
  }
`


const  TecSpan = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:.75rem;  
  font-style:italic;
  color:#E0E0E0;
`;

export const Technologies = () => {
  return (
    <>
    <CertificateTitle>Minhas especializações:</CertificateTitle>
   <TecDiv>   
   {api.map((api) => <li  key={api.id}><TecLink to={`tecnologia/${api.name}`}><img src={api.logo}/></TecLink><TecSpan>{api.name}</TecSpan></li>)}
   </TecDiv>
   </>
  )
}