import { ButtonExp } from "../../styles";

export const ExpButton = ({children, id, setJob,setAnima, anima, job}) => {


  const handleClick = () => {
    setJob(id);
    setAnima(!anima);
  }

  return(
    <>
    <ButtonExp 
      className={job === 0 && id === 0 && 'active'} 
      onClick={handleClick} 
      id={id}
    >
      {children}
    </ButtonExp>
    </>
  )
}