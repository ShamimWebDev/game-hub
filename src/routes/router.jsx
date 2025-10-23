import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AllGames from "../pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      { path: "allgames", element: <AllGames /> },
    ],
  },

  {
    path: "register",
    element: (
      <DefaultLayout>
        <Register />
      </DefaultLayout>
    ),
  },
  {
    path: "signin",
    element: (
      <DefaultLayout>
        <Signin />
      </DefaultLayout>
    ),
  },

  {
    path: "gamedetails/:id",
    element: (
      <PrivateRoute>
        <DefaultLayout>
          <GameDetails />
        </DefaultLayout>
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <p className="text-center text-white mt-10">404 Page Not Found</p>,
  },
]);

export default router;
