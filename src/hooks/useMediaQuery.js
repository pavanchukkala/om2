// useMediaQuery.js
// Custom hook for responsive design utilities

import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);

    // Initial check
    updateMatch();

    // Listener for changes
    mediaQueryList.addEventListener('change', updateMatch);

    return () => {
      mediaQueryList.removeEventListener('change', updateMatch);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
