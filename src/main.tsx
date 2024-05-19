import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products, SingleProduct } from "./pages/index.ts";
import Billing from "./pages/billing/Billing.tsx";
import SignIn from "./pages/Sign-in/SignIn.tsx";
import SignUp from "./pages/Sign-up/SignUp.tsx";
import ProductsContextProvider from "./context/ProductsContext.tsx";

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
    element: <Billing />,
  },
  {
    path: "/pages/sign-in",
    element: <SignIn />,
  },
  {
    path: "/pages/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsContextProvider>
    <RouterProvider router={router} />
  </ProductsContextProvider>
);
