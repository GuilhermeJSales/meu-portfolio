import { useEffect, useState } from "react";
import { ThirdTitle } from "../../styles";



import {ReactComponent as Git} from "../../Assets/projects/git.svg"
import {ReactComponent as ExternalLink} from "../../Assets/projects/external-link.svg"
import pageAll from '../../../pageAll.json'
import styled from "styled-components";




const DivGrid =  styled.li`
display:grid;
grid-template-columns: repeat(12, 1fr);
gap:10px;
align-items:center;
margin-top:120px;
color:#E0E0E0;
@media (max-width:51.25rem) {
  align-items:end;
}
.projectInfos{
  grid-column:7/-1;
  grid-row: 1/-1;
  z-index:1;
  text-align:right;
}
.projectTitle{
  display:flex;
  gap:10px;
  align-items:center;
  align-self:start;
  justify-content:flex-end;
}.projectImage{
  grid-column:1/8;
  grid-row: 1/-1;
}.projectDescription{
  background:#101010;
  box-shadow: -5px 5px 5px rgba(0,0,0,.6);
  padding:20px;
p{
  font-size:.875rem;
  @media (max-width:51.25rem){
  font-size:.75rem;
  }
}
}
&:nth-of-type(even){
  .projectInfos{
    grid-column:1/7;
    text-align:initial;
  }.projectImage{
    grid-column:6/-1;
  }.projectTitle{
    justify-content:flex-start;
  }.projectDescription{
    box-shadow: 5px 5px 5px rgba(0,0,0,.6);
}
} 
@media (max-width:81.25rem){
  .projectInfos{
  grid-column:6/-1;
  }.projectImage{
    grid-column:1/9;
  }
  &:nth-of-type(even){
    .projectInfos{
    grid-column:1/8;
    }.projectImage{
    grid-column:5/-1;
    }
  }
 } 
 @media (max-width:62.5rem){
  .projectInfos{
  grid-column:4/-1;
  }
  .projectImage{
    grid-column:1/10;
  }
  &:nth-of-type(even){
    .projectInfos{
    grid-column:1/10;
  }
    .projectImage{
    grid-column:4/-1;
  }
 } 
}
 @media (max-width:51.25rem){
  .projectInfos{
  grid-column:1/-1;
  padding:10px;
  text-align:left;
  grid-row: 2;
  }
  .projectImage{
    grid-column:1/-1;
  }
  .projectTitle{
    justify-content:flex-start;
  }
  &:nth-of-type(even){
    .projectInfos{
    grid-column:1/-1;
    }
    .projectImage{
    grid-column:1/-1;
    }
 }
}
`
const ProjectName = styled.h2`
 font-size:2rem;
 @media (max-width:81.25rem){
  font-size:1.5rem;
 } @media (max-width:62.5rem){
  font-size:1rem;
 }
`

const Tech = styled.p`
  font-size:.875rem;
  color:#FF4500;
  margin:10px 0 20px 0;
  @media (max-width:62.5rem){
  font-size:.75rem;
 }
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
  console.log(newArray)
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
  // function handleMouseOver({target}){
  //   let gif = target.attributes.gif.nodeValue;
  //       target.setAttribute('src', `https://res.cloudinary.com/dwmikyqye/image/upload/${gif}`);
  //  }




//  FUNÇÃO PARA TROCAR SRC DE GIF PARA IMG NO LEAVE HOVER
  //  function handleMouseLeave({target}){
  //   let image = target.attributes.image.nodeValue;
  //     target.setAttribute('src', `https://res.cloudinary.com/dwmikyqye/image/upload/${image}`);
  //  }
  
    return (
    <ul>
      {project.map((item) => <DivGrid className="animeLeft" key={item.id}>
      <div className="projectInfos">
        <div className="projectTitle">
          <ProjectName>{item.title}</ProjectName>
          {item.server ? <> <a href={item.git} target="_blank"><Git/></a> <a href={item.live} target="_blank"><ExternalLink/></a> </> : <a href={item.git}><Git/></a> }
        </div>
          <Tech>{item.technologies}</Tech>
        <div className="projectDescription">
          <p>{item.description}</p>
        </div>
          
      </div>

      <div className="projectImage">
         <img 
            onMouseEnter={handleMouseOver}
            onMouseOut={handleMouseLeave}
            gif={`${item.gif}`} image={item.img} 
            src={`https://res.cloudinary.com/dwmikyqye/image/upload/${item.img}`}
            alt={item.title}
          />        
      </div>
      
      </DivGrid>)}
      {page > 6 && <ThirdTitle style={{marginTop:'50px'}}>Não existem mais projetos até o momento</ThirdTitle>}
    </ul>
  )
}