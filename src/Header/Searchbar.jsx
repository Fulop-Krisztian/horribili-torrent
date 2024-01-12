import React, { useContext, useState } from 'react';
import SearchContext from '/src/Contexts/SearchContext.jsx';


function Searchbar() {
  const { setSearchResults } = useContext(SearchContext);
  const [searchPressed, setSearchPressed] = useState(false)

  const handleSearch = async () => {
    setSearchPressed(true)
    try {
      const response = await fetch('https://krissssz.ddns.net/search.php');
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        console.log(SearchContext)
        console.log('Successfully received search results:', data);
      } 
      
      else {
        console.error('Failed to fetch data');
      }

    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
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
