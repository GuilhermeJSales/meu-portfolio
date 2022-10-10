import { useParams } from "react-router-dom";
import {specializations} from "../../utils/Specializations-object"

import { Description } from "./Description";
import { Certification } from "./Certification";
import { SubTitleAll} from "../../styles";






export const Qualifications = () => {
const {name} = useParams();


const tecnologia = specializations.filter((i) => name === i.name);
  return (
    <div data-aos="fade-up"  data-aos-duration="2000">
    <section>
      <Description  tecnologia={tecnologia} />
    </section>

    <section style={{padding:'100px 0'}}>
    <SubTitleAll>Certificados</SubTitleAll>
    <Certification tecnologia={tecnologia} />
    </section>
    </div>
  )
}