import styled from "styled-components";
import { Paragraph, Title } from "../../styles";

const Div = styled.div`
display: flex;
align-items:center;
gap:20px;
margin-bottom: 50px;
@media (max-width:17.875rem){
    width:25px;
  }
`


const TitleCertificate = styled(Title)`
margin:0;
`

const Infos = styled.div`
max-width:800px;
`

const SaibaMais = styled.a` 
  color: #F29602;
  text-decoration: underline;
  font-size:1.25rem;
`

export const Description = ({tecnologia}) => {

  return (
    <>    
    <Div>
      <TitleCertificate style={{color:'white'}}>{tecnologia[0].name}</TitleCertificate>
      <img src={tecnologia[0].logo} alt={tecnologia[0].name}/>
    </Div>

    <Infos>
      <Paragraph>{tecnologia[0].description}</Paragraph>
      <SaibaMais href={tecnologia[0].saibaMais} target="_blank">Saiba mais sobre {tecnologia[0].name}</SaibaMais>
    </Infos>
    </>

  )
}