import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Hello World</div>,
  },
]);

export default router;
