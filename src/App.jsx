import  GlobalStyle from "./Global"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Redes } from "./Components/Forms/Redes"
import { Portfolio } from "./Components/Portfolio"
import { Qualifications } from "./Components/Qualifications/Qualifications"
import { Footer } from "./Components/Footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MainConfigs} from './styles';


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
        <MainConfigs>
        <Redes />
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="tecnologia/:name" element={<Qualifications/>}/>
        </Routes>
        </MainConfigs>
        <Footer/>
        <GlobalStyle />
      </BrowserRouter>
   </div>
  )
}

