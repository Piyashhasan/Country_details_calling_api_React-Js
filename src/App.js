import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/country_details/:searchName"
          element={<CountryDetails />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
