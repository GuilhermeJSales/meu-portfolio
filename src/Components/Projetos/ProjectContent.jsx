import { useEffect, useState } from "react";
import { ThirdTitle, Title } from "../../styles";

import pageAll from '../../../pageAll.json'




export const ProjectContent = ({contRef}) => {
const [page, setPage] = useState(0);
const [project, setProject] = useState([]);

const [content, setContent] = useState([[]]);


useEffect(() => {
  const result = getPartsOfArray(pageAll, 2)
  setContent(result);
},[])


const getPartsOfArray = (array, perPage) => {
  const resultRestDivision = array.length % perPage
  const resultDivisionInt = Math.floor(array.length / perPage)
  let newArray = []
  let inicio = 0
  let final = perPage

  for (let i = 1; i <= resultDivisionInt; i++) {
    newArray.push(array.slice(inicio, final))
    inicio += perPage
    if (i === resultDivisionInt) {
      final += resultRestDivision
    } else {
      final += perPage
    }
  }
  if (resultRestDivision > 0) {
    newArray.push(array.slice(inicio, final))
  }
  return newArray
}


useEffect(() => {
    if(page < content.length){
    const json = content[page]
    setProject([...project,...json]);
    console.log(json)
  }
},[page,content]);


useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
  if(entries.some((entry) => entry.isIntersecting)){
    setPage((pageInsideState) => pageInsideState + 1)
  }
  },{
    threshold:1
  });
observer.observe(contRef.current);
return () => {
  observer.disconnect();  
}
},[]);
  
    return (
    <>      
      <Title>Projetos</Title>
      <ThirdTitle>Esses são os projetos que já realizei</ThirdTitle>
    <div> 
      <ul style={{height:'100%'}}>  
      {project.map((item) => <li className="animeLeft" key={item.id}>
       <img style={{padding:'100px 0'}} src={`https://res.cloudinary.com/dwmikyqye/image/upload/${item.img}`}/>  
      </li>)}
      </ul>
      {page > 2 && <ThirdTitle>Não existem mais projetos até o momento</ThirdTitle>}
    </div>  
  </>
  )
}