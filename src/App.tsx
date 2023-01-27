import React from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css"

const App = () => {

  
  return <main className="App">
<MoviesContainer movies={data.movies}/>
  </main>;
};

export default App;
