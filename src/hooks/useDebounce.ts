import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 300): string => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
