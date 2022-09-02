import {Span, Title, SubTitle, ParagraphPresentation, DivFlex, SectionPresentation} from '../../styles'
import { Button } from '../Forms/Button'

export const Presentation = () => {
  return (
    <SectionPresentation>
      <Span>Olá, meu nome é</Span>
      <Title>Guilherme Jesus Sales.</Title>
      <SubTitle>Sou desenvolvedor front-end.</SubTitle>
      <ParagraphPresentation>
      Construo sites para web e estou me aprimorando cada dia mais para atender as expectativas dos clientes.
      Atualmente estou cursando Análise e Desenvolvimento de Sistemas e concluindo cursos de certificações em linguagens de programação e frameworks através de plataformas online.


      </ParagraphPresentation>
      <DivFlex>
        <Button margin={'3.125rem'} to="portfolio">Meu Portfólio</Button>    
      </DivFlex>
    </SectionPresentation>
  )
}