import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList"


const Main = () => {

  const [ search, setSearch ] = useState({
    search: ''
  });

  return (
    <div>
      <h2>Main</h2>
      <SearchBar setSearch={setSearch} />
      <CardList search={search} />
    </div>
  );
};

export default Main;

