import { Link } from "react-router-dom"
import {api} from "../../api"
import {TecDiv, TecSpan, TecLink} from "../../styles"


export const Tecnologias = () => {
  return (
   <TecDiv>
   {api.map((api) => <li  key={api.id}><TecLink to={api.name}><img src={api.logo}/></TecLink><TecSpan>{api.name}</TecSpan></li>)}
   </TecDiv>
  )
}