import { Outlet, NavLink } from 'react-router-dom';

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map(({id, title}) => (
          <li key={id}> 
            <NavLink to={`${id}`}>{title}</NavLink> 
          </li>))}
        </ul>
      </nav>
      <Outlet movies={movies} />
    </div>
  );
}

export default Movies;
