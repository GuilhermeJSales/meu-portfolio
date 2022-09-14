import { useEffect } from "react";



export const useScrollAnima = (classe, hiddenOff, pathname) => {  
  

  useEffect(() => {
    
    const sections = [...document.querySelectorAll(classe)];
     const observer = new IntersectionObserver(entries => {
      Array.from(entries).forEach(entry => {
        entry.intersectionRatio >= .1 && entry.target.classList.add(hiddenOff);        
      })
     },{
      threshold: .1,
     })
     
     sections.forEach((element) => {
       observer.observe(element)
     })
  
     return () => {
      observer.disconnect();
     }
      
   },[pathname])

}