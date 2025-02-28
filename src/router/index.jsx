import { createHashRouter } from "react-router-dom";
import ForntLayout from "../layout/Forntlayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/productPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";


const router = createHashRouter([
  {
    path: "/",
    element: <ForntLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      
    ],
  },
  {
    path:"*",
    element: <NotFound />
  }
  
]);

export default router;
