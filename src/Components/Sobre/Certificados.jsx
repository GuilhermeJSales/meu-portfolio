import { useParams } from "react-router-dom";
import {api} from "../../api"




export const Certificados = () => {
const {name} = useParams();

const teste = api.filter((i) => {
  if(i.name === name){
    return true;
  }
} );
console.log(teste)
  return (
    <>
    <h1 style={{color:'white'}}>{teste[0].name}</h1>
    <img src={teste[0].logo}/>
    </>
  )
}