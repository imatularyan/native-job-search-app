import { useState, useEffect } from "react";
import { FETCH_JOB_DETAILS, API_KEY } from "../constants/constants";

const useDetails = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = FETCH_JOB_DETAILS + query;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  console.log(options);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      if (response.status >= 200 || response.status <= 299) {
        const json = await response.json();
        console.log("Job data", json?.data);
        setData(json?.data);
        setIsLoading(false);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useDetails;
