import { createBrowserRouter, Outlet, Link, NavLink, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const Layout = () => {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <ul>
          <li>
            <NavLink 
              className={({isActive}) => 
              isActive ? 'purple' : ''}  
              to = "/">Home</NavLink>
          </li>
          <li>
            <Link to="/stocks">Stocks</Link>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink> 
              {/* 
              <a href='/movies'>Movies</a>
              <a> tags link us OUTSIDE of our app, only good use case 
              */}
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
