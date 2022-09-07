const useFetch = (fetchDataFunction, applyData) => {
  const fetchHandler = async () => {
    try {
      const response = await fetchDataFunction();
      applyData(response);
    } catch (e) {
      console.log(e);
    }
  };

  return fetchHandler;
};

export default useFetch;
