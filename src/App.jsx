import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PostContainer from './Posts/PostContainer';
import Welcome from './Welcome';
import SearchContext from './Contexts/SearchContext';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const renderposts = true;

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <>
        <Header />
        <main className="content">
          <PostContainer renderposts={renderposts} />
          <Welcome renderposts={renderposts} />
        </main>
        <Footer />
      </>
    </SearchContext.Provider>
  );
};

export default App;
