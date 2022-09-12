import { useLocation } from "react-router-dom";
import { useScrollAnima } from "../Hooks/useScrollAnima";


export const Portfolio = () => {
  
  // ANIMA AO SCROLL TODA VEZ QUE ALTERA A ROTA.
  const {pathname} = useLocation();
  useScrollAnima('.init-hidden', 'init-hidden-of',pathname);

    return (
    <div>
      <h1 className="init-hidden" style={{color:"white"}}>Hello World</h1>
    </div>
  )
}