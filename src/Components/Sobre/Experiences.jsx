import { useEffect, useRef, useState } from "react"
import { JobDiv, SubTitleAll, SubH3, ButtonExp, DivExp, TitleExp, TitleSpan, ParagraphExp } from "../../styles"


export const Experiences = () => {
const exp = [
  {
    id: 0,
    empresa: "Máxima Voip",
    trabalho: "Suporte Técnico",
    description: "Suporte Técnico para clientes via chat. Criação e edição de novos ambientes para a discadora. Instalação e treinamento do sistema para os novos clientes.",
  },{
    id: 1,
    empresa: "Agência R3",
    trabalho: "Desenvolvedor WordPress",
    description: "Desenvolvimento de sites via WordPress, utilizando temas premium ou construindo novos a partir de plugins da plataforma, como por exemplo o 'Elementor'.",
    },{
      id: 2,
      empresa: "Freelance",
      trabalho: "Social Media",
      description: "Desenvolvimento de artes para redes sociais de clientes de diversos tipos de segmentos. Criação de story, post-image e também cartões de visita",
      },
]

const [job, setJob] = useState(0);


  return (
    <section>
      <SubTitleAll>Minhas Experiências</SubTitleAll>
      <SubH3>- Experiências relacionadas a área de tecnologia.</SubH3>
      <DivExp>
      <JobDiv>
        {exp.map((exp, index) => 
          <ButtonExp 
          onClick={() => setJob(index)} 
          className={job === 0 && index === 0 ? 'active' : ''} 
          key={exp.id}>
            {exp.trabalho}
          </ButtonExp>
        )}
      </JobDiv>
        {
        exp[job].id === job && <div><TitleExp>{exp[job].trabalho} <TitleSpan>{` ❖ ${exp[job].empresa}`}</TitleSpan></TitleExp><ParagraphExp>{exp[job].description}</ParagraphExp></div>
        }
      </DivExp>
      
    </section>
  )
}



