import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import { Product } from './pages';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/Categories",
      element: <Product />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
