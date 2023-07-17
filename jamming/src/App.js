import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {

const [searchValue, setSearchValue] = useState("");

const handleSearch = (term) => {
  setSearchValue(term);
};

  return (
    <div>
      
      <SearchBar onSearch={handleSearch}></SearchBar>
      <SearchResults searchValue={searchValue}></SearchResults>

    </div>
  );
}

export default App;
