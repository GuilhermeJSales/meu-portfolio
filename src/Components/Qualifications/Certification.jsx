import { useState } from "react";
import styled from "styled-components"

const Button = styled.button`
  font-family:'Roboto Mono', monospace;
  font-size:1rem;
  letter-spacing:1px;
  text-transform:uppercase;
  color:#9F9F9F;
  background:#1F1F1F;
  outline: 2px solid #474747;
  border: 3px solid #141414;
  padding:1.375rem;
  margin-top: 1.875rem;
  width:250px;
  text-align:center;
  transition: .3s ease-in-out;
  &:hover{
    background:#3333;
    color:#F5F5F5;
    border: 3px solid #141414;
    outline: 2px solid #C8560A;
  }
  @media (max-width:25rem) {
    font-size:.875rem;
    width:210px;
  }
`

const IMG = styled.img`
  margin-top: 60px;
`


export const Certification = ({tecnologia}) => {
  const [certificate, setCertificate] = useState(false);

  const handleCertificate = () => {
    setCertificate(!certificate);
  }


  return (
    <div>
    <Button onClick={handleCertificate}>     
        Certificado {tecnologia[0].plataforma}
    </Button>
   
   {tecnologia[0].name === 'CSS3' && certificate ?
  <>
    <IMG src={tecnologia[0].certificado[0]} alt="certificado" />
    <IMG src={tecnologia[0].certificado[1]} alt="certificado" />
    <IMG src={tecnologia[0].certificado[2]} alt="certificado" />
  </>  
  : certificate &&
    <IMG src={tecnologia[0].certificado} alt="certificado" />
  }  
    </div>
  )
}