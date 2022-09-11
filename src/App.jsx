import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Redes } from "./Components/Forms/Redes"
import { Home } from "./Components/Home"
import { Portfolio } from "./Components/Portfolio"
import { Contato } from "./Components/Contato"
import { Tecnologies } from "./Components/Sobre/Tecnologies"
import { Footer } from "./Components/Footer"
import  GlobalStyle from "./Global"
import { useScrollAnima } from "./Hooks/useScrollAnima"


export const App = () => {

  useScrollAnima('.init-hidden', 'init-hidden-of');

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Redes />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="tecnologia/:name" element={<Tecnologies/>}/>
        </Routes>
        <Footer/>
        <GlobalStyle />
      </BrowserRouter>
   </div>
  )
}

