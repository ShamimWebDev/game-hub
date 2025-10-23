import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import PageLoader from "./components/PageLoader";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import AllGames from "./pages/AllGames";

export default function App() {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  return (
    <>
      <AnimatePresence>{isPageLoading && <PageLoader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home setIsPageLoading={setIsPageLoading} />
              </PageTransition>
            }
          />
          <Route
            path="/allgames"
            element={
              <PageTransition>
                <AllGames setIsPageLoading={setIsPageLoading} />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
