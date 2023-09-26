import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Login from "./componentes/pages/login";
import Signup from "./componentes/pages/singup";
import Navbarra from "./componentes/secciones/Navbarra";
import Home from "./componentes/home/Home";
function App() {
  return (
    <div className="App">
      <Navbarra data={true} />
      <Home />
      <Routes></Routes>
    </div>
  );
}

export default App;
