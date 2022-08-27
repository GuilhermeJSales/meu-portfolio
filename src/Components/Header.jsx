import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/header-logo.svg'
import {HeaderSite, ContainerHeader, HeaderUl, HeaderLI, LinkHeader} from '../styles'

export const Header = () => {
  return (
  <HeaderSite>
    <ContainerHeader>
      <Link to="/">
        <Logo />
      </Link>
    <nav>
      <HeaderUl>
        <HeaderLI><LinkHeader font={'Roboto'} to="/">Início</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="portfolio">Portfólio</LinkHeader></HeaderLI>
        <HeaderLI><LinkHeader font={'Roboto'} to="contato">Contato</LinkHeader></HeaderLI>
      </HeaderUl>
    </nav>
    </ContainerHeader>
  </HeaderSite>
  )
}