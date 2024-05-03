import React, { useRef } from 'react';

// add debounce that searches as you type

const SearchBar = ({ setSearch }) => {
  const searchValue = useRef();

  const handleChange = ({ target }) => {

    const { search, value } = target;

    setFormulario({
      ...formulario,
      [search]: value //[] establece propiedad computada del objeto, si no puesieramos [] crearría una nueva propiedad del objeto
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      search: searchValue.current.value,
    };
    setSearch(data);
  };

  return (
    <div>
      <h4>Search a Pokemon</h4>

      <form className="register-form" onSubmit={handleSubmit} >

        <label htmlFor="search">
          <input type="text" ref={searchValue} placeholder='search' onChange={handleChange} required />
        </label>

      </form>
    </div>
  );
};

export default SearchBar;
