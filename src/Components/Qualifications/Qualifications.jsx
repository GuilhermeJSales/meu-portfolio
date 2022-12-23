import {Helmet} from "react-helmet";

import styled from "styled-components";
import { SubTitleAll} from "../../styles";
import { ThirdTitle} from "../../styles";

import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {specializations} from "../../utils/Specializations-object"

import { Description } from "./Description";
import { Certification } from "./Certification";

const Subtitle = styled(SubTitleAll)`
  &:before{
  width:2.5%;
}
`;


const TecSection = styled.section` 
  display:grid;
  justify-content:center;
  margin-bottom:100px;
  text-align:center;
`;


const TecUl = styled.ul`
  display:grid;
  grid-template-columns:repeat(8, 60px);
  align-items:center;
  gap:20px;
  margin-bottom:1rem;
  @media (max-width:768px){
    grid-template-columns:repeat(3, 60px);
  }
    @media (max-width:320px){
    grid-template-columns:repeat(2, 60px);
  }
`;

const TecLink = styled(Link)`
  width:60px;
  height:60px;
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
  &:visited{
    transform:scale(1.1);
    background:#1C1C1C;
    border: 3px solid #6495ED;
    outline: 2px solid #191970;
  }
  @media (max-width:320px){
    padding:5px;
  }
  
`;




export const Qualifications = () => {
const {name} = useParams();
const ref = useRef();


const tecnologia = specializations.filter((i) => name === i.name);

const handleClick = () => {
    ref.current.classList.remove('animeLeft') 
    ref.current.classList.add('init-hidden')

    const clearClass = setTimeout(() => {
    ref.current.classList.remove('init-hidden');
    ref.current.classList.add('animeLeft');
    },100);

    return () => {
      clearTimeout(clearClass);
    }
    
}

  return (
    <>
    <Helmet
    title={`Certificado ${name} - Guilherme J. Sales - Desenvolvedor Front-end`} 
    description={`Olá, essa é a página onde você pode visualizar meus certificados de ${name}`}
    />

    <div ref={ref} className="animeLeft">
      <section>
        <Description  tecnologia={tecnologia} />
      </section>

      <section style={{padding:'100px 0'}}>
        <Subtitle>Certificados</Subtitle>
        <Certification tecnologia={tecnologia} />
      </section>

      <TecSection>
        <ThirdTitle>Outros certificados:</ThirdTitle>
          <TecUl>
          {specializations.map((item) => 
            <li onClick={handleClick} key={item.id}>
              <TecLink to={`/tecnologia/${item.name}`}>
                <img src={item.logo} alt={item.name}/>
              </TecLink>
            </li>
            
          )}
          </TecUl>
      </TecSection>
    </div>
    </>
  )
}