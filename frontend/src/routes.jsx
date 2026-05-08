import { createBrowserRouter } from "react-router";

import ProductListPage from "./pages/ProductListPage/ProductListPage";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/womens",
    element: <ProductListPage />,
  }
]);