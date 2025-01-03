import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Products, {
  action as updateAvailabilityAction,
  loader as productsLoader,
} from "./pages/Products";
import NewProduct, { action as newProductAction } from "./pages/NewProduct";
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from "./pages/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Products />,
        index: true,
        loader: productsLoader,
        action: updateAvailabilityAction,
      },
      {
        element: <NewProduct />,
        path: "productos/nuevo",
        action: newProductAction,
      },
      {
        element: <EditProduct />,
        path: "productos/:id/editar",
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: "productos/:id/eliminar",
        action: deleteProductAction,
      },
    ],
  },
]);
