import fetch from 'cross-fetch';
import { useState, useEffect, useRef } from 'react';

const useFetch = (url, options = {}, cleanup) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const abortController = new AbortController();
  const isMounted = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          abortController: abortController.signal,
          ...options
        });
        const json = await res.json();
        if (isMounted.current) setResponse(json);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
    return () => {
      isMounted.current = false;
      abortController.abort();
      typeof cleanup === 'function' ? cleanup() : undefined;
    };
  }, []);

  return { response, error }
}

export default useFetch;
