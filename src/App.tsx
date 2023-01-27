import React from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";

const App = () => {

  
  return <main>
<MoviesContainer movies={data.movies}/>
  </main>;
};

export default App;
