import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useMedia } from "../../Hooks/useMedia";


const ButtonExp = styled.button`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-weight:bold;
  background:transparent;
  border: none;
  display:flex;
  flex-wrap:nowrap;
  border-left:2px solid #333333;
  width:100%;
  color:#474747;
  padding:10px;
  cursor:pointer;
  transition: .5s ease-in-out;
  &:before{
    content:"•";
    color:#F29602;
    margin-right:10px;
  }
  &:hover{
    color:#f29602;
    background:#3333;
  } &:focus{
    color:#E0E0E0;
    background:#3333;
  }&.active{
    color:#E0E0E0;
    background:#3333;
  } @media (max-width:54rem){
    min-width:300px;
    border-left:none;
  }
  
`


export const ExpButton = ({children, id, setJob,setAnima, anima, job, setScrollButton}) => {
  const media = useMedia('(max-width:54rem)');
  const ref = useRef();

  // evento de clique
  const handleClick = () => {
    setJob(id);
    setAnima(!anima);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;
    if(media) {
      setScrollButton(`translateX(${id * width}px)`);
    } else {
      setScrollButton(`translateY(${id * height}px)`);
    }
  }

  // resize do clique, vai continuar onde estava, porém com novas configs.
  useEffect(() => {
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;
    const handleSize = ()=> {
      if(media) {
        setScrollButton(`translateX(${job * width}px)`);
      } else {
        setScrollButton(`translateY(${job * height}px)`);
      }
    }
    handleSize();
     },[media]);


  return(
    <>
    <ButtonExp 
      ref={ref}
      className={job === id && 'active'} 
      onClick={handleClick} 
      id={id}
    >
      {children}
    </ButtonExp>
    </>
  )
}