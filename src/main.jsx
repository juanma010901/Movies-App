import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import PopularMovies from './views/PopularMovies'
import SearchMovies from './views/SearchMovies'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PopularMovies />,
  },
  {
    path: "/buscar/:name",
    element: <SearchMovies />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
