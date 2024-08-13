import {useParams} from 'react-router-dom';

function MovieDetails({ movies }) {
  const {movieId} = useParams();

  const selectedMovie = movies.find((el) => el.id === Number(movieId))

  return (
    <div className='comp purple'>
      <h1>{selectedMovie.title}</h1>
      <p>{selectedMovie.description}</p>
    </div>
  );
}

export default MovieDetails;
