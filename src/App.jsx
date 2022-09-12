import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Redes } from "./Components/Forms/Redes"
import { Home } from "./Components/Home"
import { Portfolio } from "./Components/Portfolio"
import { Contato } from "./Components/Contato"
import { Technologies } from "./Components/Sobre/Technologies"
import { Footer } from "./Components/Footer"
import  GlobalStyle from "./Global"
import { Certificados } from "./Components/Sobre/Certificados"


export const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Redes />
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="tecnologia/:name" element={<Certificados/>}/>
        </Routes>
        <Footer/>
        <GlobalStyle />
      </BrowserRouter>
   </div>
  )
}

