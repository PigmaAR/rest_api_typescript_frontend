import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Products, { loader as productsLoader } from "./pages/Products";
import NewProduct, { action as newProductAction } from "./pages/NewProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Products />,
        index: true,
        loader: productsLoader,
      },
      {
        element: <NewProduct />,
        path: "productos/nuevo",
        action: newProductAction,
      },
    ],
  },
]);
