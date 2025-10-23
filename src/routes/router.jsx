import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../privateRoute/PrivateRoute";

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

  // Public pages with navbar/footer
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
    path: "/about-us",
    element: (
      <DefaultLayout>
        <AboutUs />
      </DefaultLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <DefaultLayout>
        <Contact />
      </DefaultLayout>
    ),
  },
  {
    path: "/faq",
    element: (
      <DefaultLayout>
        <FAQ />
      </DefaultLayout>
    ),
  },

  // Private route
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

  // 404 page
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
