import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Loading from "./components/Loading";
import AuthPage from "./pages/AuthPage";
import Signup from "./SignUp/SignUp";
// import "./index.css";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Analytics = lazy(() => import("./pages/analytics"));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="sign-up" element={<Signup />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
