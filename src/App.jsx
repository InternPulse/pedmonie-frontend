import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Loading from "./components/Loading";
import "./index.css";
import Signup from "./SignUp/SignUp";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="sign-up" element={<Signup />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
export default App;
