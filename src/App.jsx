import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Header } from "./Components/Header"
import { Portfolio } from "./Components/Portfolio"
import { Contato } from "./Components/Contato"
import  GlobalStyle from "./Global"
import { Tecnologies } from "./Components/Sobre/Tecnologies"
import { Footer } from "./Components/Footer"




export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
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

