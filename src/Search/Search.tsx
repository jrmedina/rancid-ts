import React, { useState } from "react";
import "./Search.css"

interface SearchProps {
    searchMovies: any;
}
const Search: React.FC<SearchProps> = ({ searchMovies }) => {
const [input, setInput] = useState()
  return (
    <form>
        <p>Search</p>
      <input type="text" value={input} onChange={(e) => searchMovies(e.target.value)}/>
    </form>
  );
};

export default Search;
