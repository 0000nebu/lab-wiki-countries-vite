import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path="/countries/:alpha3Code" element={<CountryDetailsPage/>} />
      </Routes>

    </div>
  );
}

export default App;
