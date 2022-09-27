import { useParams } from "react-router-dom";
import {specializations} from "../../utils/Specializations-object"

import { Description } from "./Description";
import { Certification } from "./Certification";
import { SubTitleAll} from "../../styles";






export const Qualifications = () => {
const {name} = useParams();


const tecnologia = specializations.filter((i) => name === i.name);
  return (
    <>
    <section>
      <Description  tecnologia={tecnologia} />
    </section>

    <section style={{padding:'100px 0'}}>
    <SubTitleAll>Certificados / Cursos</SubTitleAll>
    <Certification tecnologia={tecnologia} />
    </section>
    </>
  )
}