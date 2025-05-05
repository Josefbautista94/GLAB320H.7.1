import { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY; // Loads your OMDB API key from the .env file
  const [movie, setMovie] = useState(null); // Sets up movie state, initially null

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch( // Sends a GET request to the OMDB API with the search term and your API key.
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json(); // Parses the raw HTTP response into a JavaScript object.
      setMovie(data); // Updates the movie state with the fetched data.
    } catch (err) {
      console.error("Failed to fetch movie:", err);
    }
  };

  useEffect(() => { // This hook runs once when the component mounts (because of the empty [] dependency array).
    getMovie("Clueless"); // default movie
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
