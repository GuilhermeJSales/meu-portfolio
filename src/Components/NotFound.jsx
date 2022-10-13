import {Helmet} from "react-helmet";
import { Paragraph, Title } from "../styles"




export const NotFound = () => {
  return (
    <>


<Helmet
     title="Not Found" 
     description="Erro 404 - Essa página não existe."
  />
    <section style={{minHeight:"100vh"}}>
      <Title>Erro 404.</Title>
      <Paragraph>Página não encontrada.</Paragraph>
    </section>
    </>
  )
}