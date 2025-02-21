import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;
