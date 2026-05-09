import { createBrowserRouter } from "react-router";

import ProductListPage from "./pages/ProductListPage/ProductListPage";
import App from "./App";
import ShopAppWrapper from "./pages/ShopAppWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopAppWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/women",
        element: <ProductListPage  categoryType={'WOMEN'}/>,
      },
      {
        path: "/men",
        element: <ProductListPage  categoryType={'MEN'}/>,
      },
      {
        path: "/kids",
        element: <ProductListPage  categoryType={'KIDS'}/>,
      },
    ],
  },
]);
