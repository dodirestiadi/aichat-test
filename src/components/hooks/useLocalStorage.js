import { useState, useEffect } from 'react';

const useStateWithLocalStorage = (key, defaultVal) => {
  const [value, setValue] = useState(localStorage.getItem(key) || defaultVal);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useStateWithLocalStorage;