import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/search"} element={<SearchPage />} />
      </Routes>
      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
