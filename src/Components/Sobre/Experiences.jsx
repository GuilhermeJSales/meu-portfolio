import { useState } from "react"
import { SubTitleAll, SubH3, ButtonExp } from "../../styles"


export const Experiences = () => {
const exp = [
  {
    id: 0,
    empresa: "Máxima Voip",
    trabalho: "Suporte Técnico",
    description: "Suporte técnico via chat, para clientes da Máxima. Configuração de novos ambientes e treinamento para novos clientes.",
  },{
    id: 1,
    empresa: "Agência R3",
    trabalho: "Desenvolvedor WordPress",
    description: "Desenvolvimento de sites via WordPress, utilizando temas premium ou construindo novos a partir de plugins da plataforma.",
    },{
      id: 2,
      empresa: "Freelance",
      trabalho: "Social Media",
      description: "Desenvolvimento de artes para redes sociais de clientes de diversos tipos de segmentos.",
      },
]

const [job, setJob] = useState(0)

  return (
    <section>
      <SubTitleAll>Minhas Experiências</SubTitleAll>
      <SubH3>- Experiências relacionadas a área de tecnologia.</SubH3>
      <div className="experiencias">
        {exp.map((exp, index) => <ButtonExp onClick={() => setJob(index)} className={job === 0 && index === 0 ? 'active' : ''} key={exp.id}>{exp.trabalho}</ButtonExp>)}
        {exp[job].id === job && <div><h4>{exp[job].empresa}</h4> <p>{exp[job].description}</p></div>}
      </div>
    </section>
  )
}



