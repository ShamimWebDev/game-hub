import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Banner from "../components/banner";


const router = createBrowserRouter([
  
    {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element:<Banner></Banner> ,
      },
      {
        path: "",
        element: <div>Hello World</div>,
        
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Hello World</div>,
  },
]);

export default router;