export default function MovieDisplay({ movie }) { // Defines the component and using destructuring to pull the movie prop directly from props
    const loaded = () => ( // this is a function that returns the JSX for when movie data exitss
      <>

        <h1>{movie.Title}</h1>  
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  
    const loading = () => <h1>No Movie to Display</h1>; //This function returns fallback JSX when no movie has been loaded yet
  
    return movie ? loaded() : loading(); // If movie exists, loaded() is called and its JSX is returned, If not, loading() is called instead
  }
  