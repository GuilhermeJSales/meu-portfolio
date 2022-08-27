import {Span, Title, SubTitle, ParagraphSobre, DivFlex} from '../../styles'
import { Button } from '../Forms/Button'

export const Sobre = () => {
  return (
    <section>
      <Span>Olá, meu nome é</Span>
      <Title>Guilherme Jesus Sales.</Title>
      <SubTitle>Sou desenvolvedor front-end.</SubTitle>
      <ParagraphSobre>Sou um desenvolvedor web front-end,
      com experiência na criação de diversos sites. Apaixonado por tecnologia,
      estou cursando superior em Analise e Desenvolvimento de Sistemas e coleciono
      alguns certificados de linguagens e frameworks da web.</ParagraphSobre>
      <DivFlex>
        <Button margin={'3.125rem'} to="portfolio">Meu Portfólio</Button>
        <Button to="contato">Contato</Button>
      </DivFlex>
    </section>
  )
}