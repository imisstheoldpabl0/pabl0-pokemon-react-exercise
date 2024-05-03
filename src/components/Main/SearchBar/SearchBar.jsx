import React, { useRef } from 'react';

// add debounce that searches as you type

const SearchBar = ({ setSearch }) => {
  const searchInput = useRef();

  const handleChange = () => {
    setSearch(searchInput.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      search: searchInput.current.value,
    };
    setSearch(data);
  };

  return (
    <div>
      <h4>Search a Pokemon:</h4>

      <form className="register-form" onSubmit={handleSubmit} >

          <input type="text" ref={searchInput} placeholder='search' onChange={handleChange} required />
          <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
