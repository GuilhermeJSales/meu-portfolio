import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Header } from "./Components/Header"
import { Portfolio } from "./Components/Portfolio"
import { Contato } from "./Components/Contato"
import  GlobalStyle from "./Global"
import { Tecnologias } from "./Components/Sobre/Tecnologias"



export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="tecnologia/:name" element={<Tecnologias/>}/>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
   </div>
  )
}

