import { useRef } from "react";
import { ButtonExp } from "../../styles";

export const ExpButton = ({children, id, setJob,setAnima, anima, job, setScrollButton}) => {

  const ref = useRef();

  const handleClick = () => {
    setJob(id);
    setAnima(!anima);
    const height = ref.current.clientHeight;
    setScrollButton(`${id * height}px`);
  }
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