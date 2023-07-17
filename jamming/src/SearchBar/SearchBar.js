import React, { useState } from 'react';


function SearchBar({ onSearch }) {
const [searchTerm, setSearchTerm] = useState("");

const handleInputChange = (event) => {
   setSearchTerm(event.target.value);
}

const handleSubmit = (event) => {
   event.preventDefault();
   onSearch(searchTerm);
}
   return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Enter Song Name</label>
    <input type="text"
        placeholder="Enter a song name"
        value={searchTerm}
        onChange={handleInputChange}></input>
    <button type="submit">Search</button>
    </form>
    </>
   ) 
}

export default SearchBar;