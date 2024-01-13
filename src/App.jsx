import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PostContainer from './Posts/PostContainer';
import Welcome from './Welcome';
import SearchContext from './Contexts/SearchContext';
import { Route, Routes } from 'react-router-dom';
import PostPage from './Posts/PostPage';
import LoginPage from './Login/Login';
import RegisterPage from './Login/Register';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/search" element={<PostContainer/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>
            <Route path="/post" element={<PostPage/>}></Route>
          </Routes>
        </main>
        <Footer />
      </>
    </SearchContext.Provider>
  );
};

export default App;
