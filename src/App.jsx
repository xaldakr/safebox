import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Login from "./componentes/pages/login";
import Signup from "./componentes/pages/singup";
import Navbarra from "./componentes/secciones/Navbarra";
function App() {
  return (
    <div className="App">
      <Navbarra data={true} />
      <Signup />
      <Routes></Routes>
    </div>
  );
}

export default App;
