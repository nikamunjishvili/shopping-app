import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products } from './pages/index.ts';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/Categories",
      element: <Products />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
