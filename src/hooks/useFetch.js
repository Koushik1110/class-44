import { useEffect, useState } from "react";

export const useFetch = (url, errMsg = "An error has occurred") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(errMsg);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, isLoading };
};
