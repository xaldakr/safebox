import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Login from "./componentes/pages/login";
import Signup from "./componentes/pages/singup";
import Navbarra from "./componentes/secciones/Navbarra";
import Home from "./componentes/home/Home";
import PublicarPropiedad from "./componentes/pages/PublicarPropiedad";
import CustomFooter from "./componentes/home/footer";

function App() {
  return (
    <div className="App">
      <Navbarra data={false} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="explore" element={<Explorar />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="publish" element={<PublicarPropiedad />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;
