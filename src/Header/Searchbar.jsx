import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '/src/Contexts/SearchContext.jsx';
import { searchPosts } from '/src/services/SearchService';

function Searchbar() {
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchTermFromURL = params.get('search');
    setSearchTerm(searchTermFromURL || '');
    
    if (searchTermFromURL !== null) {
      performSearch(searchTermFromURL);
    }
  }, []);

  const performSearch = async (term) => {
    try {
      const data = await searchPosts(term);
      setSearchResults(data);
      navigate(`/search?search=${term}`, { replace: true });
    } catch (error) {
      // Handle errors
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(searchTerm);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="search"
        type="text"
        className="search-bar"
        placeholder="Anything your heart desires..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
