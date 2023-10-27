import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import movies from "./assets/movies";

function App() {

  return (
    <div>
      <h1>Dynamic react app demo.</h1>
      <Counter />
      <Timer startTime={5} />
      {/* <Timer startTime={10} /> */}
      {/* <Timer startTime={20} /> */}
      <MovieList
        movies={movies}
        headingText="Movie HEADING"
        secondaryText="ASD"
      />
    </div>
  );
}
export default App;
