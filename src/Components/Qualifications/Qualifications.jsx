import { Link, useParams } from "react-router-dom";
import {specializations} from "../../utils/Specializations-object"
import styled from "styled-components";

import { Description } from "./Description";
import { Certification } from "./Certification";
import { SubTitleAll} from "../../styles";
import { ThirdTitle} from "../../styles";



const Subtitle = styled(SubTitleAll)`
  &:before{
  width:2%;
}
`;


const TecSection = styled.section` 
  display:grid;
  justify-content:center;
  text-align:center;
  margin-bottom:100px;
  @media (max-width:18.0625){
    justify-content:initial;
    text-align:initial;
  }
`;


const TecUl = styled.ul`
  display:grid;
  grid-template-columns:repeat(6, 60px);
  align-items:center;
  gap:20px;
  margin-bottom:1rem;
  @media (max-width:54rem){
    grid-template-columns:repeat(3, 60px);
  }
    @media (max-width:18rem){
    grid-template-columns:repeat(3, 60px);
  }
`;


const TecLi = styled.li`
background:#1F1F1F;
outline:1px solid #474747;
border: 2px solid #141414;
padding:8px;
transition: all .3s ease-in-out;
cursor:pointer;
&:hover{
  transform:scale(1.2);
  outline:2px solid #141414;
  border: 1px solid #F29602;
}
`;


const TecDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:20px;
.linksNav{
  color:#E0E0E0;
  transition: .2s ease;
  &:hover,
  &:focus{
    color:#F29602;
  }
}
`



export const Qualifications = () => {
const {name} = useParams();
const moreCertifications = specializations.filter((more) => name !== more.name)


const tecnologia = specializations.filter((i) => name === i.name);
  return (
    <div data-aos="fade-up"  data-aos-duration="2000">
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
      {moreCertifications.map((item) => 
        <TecLi key={item.id}>
          <Link to={`/tecnologia/${item.name}`}>
            <img src={item.logo}/>
          </Link>
        </TecLi>
      )}
      </TecUl>
      <TecDiv>
        <Link className="linksNav" to={`/`}>Início</Link>
        <Link className="linksNav" to={`/projetos`}>Projetos</Link>
      </TecDiv>
    </TecSection>
    </div>
  )
}