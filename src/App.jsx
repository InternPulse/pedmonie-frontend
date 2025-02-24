import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Loading from "./components/Loading";
import "./index.css";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </Suspense>
  );
}
export default App;
