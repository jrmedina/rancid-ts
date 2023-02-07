import React from "react";
import "./Search.css"

interface SearchProps {
    searchMovies: any;
}
const Search: React.FC<SearchProps> = ({ searchMovies }) => {
  console.log(searchMovies);

  return (
    <form>
      <input type="text" />{" "}
    </form>
  );
};

export default Search;
