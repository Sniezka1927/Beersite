import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import MissingPage from "./pages/MissingPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/details/:beerId"} element={<DetailsPage />}></Route>
        <Route path={"*"} element={<MissingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
