import { useState, useMemo } from 'react';

function useSearch(list) {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useMemo(() => {
    const result = list.filter(item => {
      return `${item.title}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredMovies(result);
  }, [list, query]);

  return [query, setQuery, filteredMovies];
};

export default useSearch;
