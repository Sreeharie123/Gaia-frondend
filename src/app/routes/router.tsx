import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "../pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero/>
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
