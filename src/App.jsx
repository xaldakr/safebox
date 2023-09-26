import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Navbarra from "./componentes/secciones/Navbarra";
function App() {
  return (
    <div className="App">
      <Navbarra data={true} />
      <Explorar />
      <Routes></Routes>
    </div>
  );
}

export default App;
