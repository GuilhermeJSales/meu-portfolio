import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { ThirdTitle, Title } from "../../styles";
import {Loading} from '../Loading/Loading'
import {ReactComponent as LoadScroll} from '../../Assets/three-dots.svg'



export const ProjectContent = ({contRef}) => {
const [page, setPage] = useState(1);
const [project, setProject] = useState([]);

const {request, data, loading, error, loadScroll} = useFetch()

useEffect(() => {
  async function fetchProjects() {
    if(page <= 3){
    const {json} = await request(`./page${page}.json`)
    setProject([...project,...json]);
    } 
  }
  fetchProjects()
},[page]);

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
  
if(loading) return <Loading />
if(error) return <h1>{error}</h1>
if(data)  
    return (
    <>      
      <Title>Projetos</Title>
      <ThirdTitle>Esses são os projetos que já realizei</ThirdTitle>
    <div> 
      <ul style={{height:'100%'}}>  
      {project.map((item) => <li className="animeLeft" key={item.id}>
       <img style={{padding:'100px 0'}} src={`https://res.cloudinary.com/dwmikyqye/image/upload/${item.img}`}/>  
      </li>)}
      {loadScroll && <LoadScroll/>}  
      </ul>
      {page > 3 && <ThirdTitle>Não existem mais projetos até o momento</ThirdTitle>}
    </div>  
  </>
  )
    
}