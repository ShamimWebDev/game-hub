import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allgames",
        element: <AllGames></AllGames>,
      },
      {
        path: "/gamedetails/:id",
        element: <GameDetails></GameDetails>,
      },
    ],
  },

  {
    path: "/auth",
    element: <div>Hello World</div>,
  },
]);

export default router;
