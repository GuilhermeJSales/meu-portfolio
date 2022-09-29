import { useEffect, useState } from "react";
import { ThirdTitle } from "../../styles";

import {ReactComponent as Git} from "../../Assets/projects/git.svg"
import {ReactComponent as ExternalLink} from "../../Assets/projects/external-link.svg"
import pageAll from '../../../pageAll.json'
import styled from "styled-components";




const DivGrid =  styled.li`
display:grid;
grid-template-columns: repeat(12, 1fr);
align-items:center;
gap:10px;
margin-top:120px;
color:#E0E0E0;
.projectInfos{
  grid-column:7/-1;
  grid-row: 1/-1;
  z-index:1;
  background:#101010;
  box-shadow: -5px 5px 5px rgba(0,0,0,.6);
  padding: 20px;  
  text-align:right;
}.projectTitle{
  display:flex;
  gap:10px;
  margin-bottom:1rem;
  align-items:center;
  justify-content:flex-end;
}&:nth-of-type(even){
  .projectInfos{
    grid-column:1/7;
    box-shadow: 5px 5px 5px rgba(0,0,0,.6);
    text-align:initial;
  }.projectTitle{
    justify-content:flex-start;
  }.projectImage{
    grid-column:6/-1;
  }
}
`
const ProjectName = styled.h2`
 font-size:2rem;
`

const ProjectDescription = styled.div`
  p:last-child{
    font-size:1.125rem;
    color:#FF9C00;
    margin-top:1rem;
  }
`

const DivImage = styled.div`
grid-column:1/8;
grid-row: 1/-1;
position:relative;
`

export const ProjectContent = ({contRef}) => {
const [page, setPage] = useState(0);
const [project, setProject] = useState([]);
const [content, setContent] = useState([[]]);

useEffect(() => {
  const result = getPartsOfArray(pageAll, 1)
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




//  FUNÇÃO PARA TROCAR SRC DA IMG PARA GIF NO HOVER
  function handleMouseOver(event){
    let target = event.target
    let gif = target.attributes.gif.nodeValue;
      event.target.setAttribute('src', `https://res.cloudinary.com/dwmikyqye/image/upload/${gif}`);
   }

//  FUNÇÃO PARA TROCAR SRC DE GIF PARA IMG NO LEAVE HOVER
   function handleMouseLeave(event){
    let target = event.target
    let image = target.attributes.image.nodeValue;
      event.target.setAttribute('src', `https://res.cloudinary.com/dwmikyqye/image/upload/${image}`);
   }
  
    return (
    <ul>
      {project.map((item) => <DivGrid className="animeLeft" key={item.id}>
      <div className="projectInfos">
        <div className="projectTitle">
          <ProjectName>{item.title}</ProjectName>
          {item.server ? <> <a href={item.git} target="_blank"><Git/></a> <a href={item.live} target="_blank"><ExternalLink/></a> </> : <a href={item.git}><Git/></a> }
        </div>
        <ProjectDescription>
          <p>{item.description}</p>
          <p>{item.technologies}</p>
        </ProjectDescription>
      </div>

      <DivImage className="projectImage">
         <img 
            onMouseEnter={handleMouseOver}
            onMouseOut={handleMouseLeave}
            gif={`${item.gif}`} image={item.img} 
            src={`https://res.cloudinary.com/dwmikyqye/image/upload/${item.img}`}
          />        
      </DivImage>
      
      </DivGrid>)}
      {page > 6 && <ThirdTitle style={{marginTop:'50px'}}>Não existem mais projetos até o momento</ThirdTitle>}
    </ul>
  )
}