import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Support from "../pages/Support";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../privateRoute/PrivateRoute";
import PublicRoute from "../privateRoute/PublicRoute"; // <-- PublicRoute
import ForgetPassword from "../pages/ForgetPassword";

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
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      { path: "allgames", element: <AllGames /> },
    ],
  },

  // Public pages (hidden if logged-in)
  {
    path: "register",
    element: (
      <PublicRoute>
        <DefaultLayout>
          <Register />
        </DefaultLayout>
      </PublicRoute>
    ),
  },
  {
    path: "signin",
    element: (
      <PublicRoute>
        <DefaultLayout>
          <Signin />
        </DefaultLayout>
      </PublicRoute>
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
  {
    path: "/support",
    element: (
      <DefaultLayout>
        <Support />
      </DefaultLayout>
    ),
  },

  // Public route
  {
    path: "gamedetails/:id",
    element: (
      <DefaultLayout>
        <GameDetails />
      </DefaultLayout>
    ),
  },

  // Forget password (accessible publicly)
  {
    path: "/forget-password",
    element: (
      <DefaultLayout>
        <ForgetPassword />
      </DefaultLayout>
    ),
  },

  // 404 page
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
