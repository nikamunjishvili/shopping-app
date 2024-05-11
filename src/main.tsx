import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products, SingleProduct } from './pages/index.ts';
import Billing from './common/components/_organisms/billing/Billing.tsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/Categories",
      element: <Products />,
  },
  {
    path: "/Categories/:id",
    element: <SingleProduct />,
},
{
  path: "/Billing",
  element: <Billing/>
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
