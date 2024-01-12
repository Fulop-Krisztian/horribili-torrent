import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '/src/Contexts/SearchContext.jsx';
import { searchPosts } from '/src/services/SearchService';

function Searchbar() {
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = async (searchTerm) => {
    try {
      const data = await searchPosts(searchTerm);
      setSearchResults(data);
      navigate(`/search?search=${searchTerm}`);
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => { e.preventDefault(); handleSearch(e.target.search.value); }}
    >
      <input
        name="search"
        type="text"
        className="search-bar"
        placeholder="Anything your heart desires..."
        aria-label="Search"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
