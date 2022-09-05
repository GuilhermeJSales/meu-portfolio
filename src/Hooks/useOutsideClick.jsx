import { useEffect } from "react"

export const useOutsideClick = (ref, call) => {
useEffect(() =>  {
  const insideClick = (event) => {
    if(!ref.current || ref.current.contains(event.target)){
      return;
    }
    call()
  };

  document.addEventListener('mousedown', insideClick);
  document.addEventListener('touchstart', insideClick);

  return () => {
    document.removeEventListener('mousedown', insideClick);
    document.removeEventListener('touchstart', insideClick);
  }
},[ref, call]);
}