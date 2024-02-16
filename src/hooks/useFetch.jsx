import React, { useEffect, useState } from "react";

function useFetch(url, config) {
  console.log(url);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, config);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
