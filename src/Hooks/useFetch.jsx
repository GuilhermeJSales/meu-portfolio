import { useState, useCallback } from 'react'

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadScroll, setLoadScroll] = useState(null)
 
  const request = useCallback( async (url, options) => {
    let response;
    let json;
    try {
      setLoadScroll(true);
      setError(null);
      response = await fetch(url, options);
      json = await response.json();
    } catch(err) {
      setError('Houve um erro');
      json = null;
    } finally {
      setLoadScroll(false);
      setLoading(false);
      setData(json)
      return {response , json};
    }
  },[]);
  
  return (
    {
      data,
      error,
      loading,
      request,
      loadScroll
    }
    
  )
}
