import  GlobalStyle from "./Global"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Redes } from "./Components/Forms/Redes"
import { Portfolio } from "./Components/Portfolio"
import { Certificados } from "./Components/Sobre/Certificados"
import { Footer } from "./Components/Footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  },[])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Redes />
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="tecnologia/:name" element={<Certificados/>}/>
        </Routes>
        <Footer/>
        <GlobalStyle />
      </BrowserRouter>
   </div>
  )
}

