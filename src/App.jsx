import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Login from "./componentes/pages/login";
import Signup from "./componentes/pages/singup";
import Navbarra from "./componentes/secciones/Navbarra";
import Home from "./componentes/home/Home";
import QuienesSomos from "./componentes/pages/quienessomos";
import PublicarPropiedad from "./componentes/pages/PublicarPropiedad";
import CustomFooter from "./componentes/home/footer";
import EditarPerfil from "./componentes/pages/EditarPerfil";
import VistaPropiedad from "./componentes/pages/VistaPropiedad";
import Ayuda from "./componentes/pages/ayuda";
//import Contactanos from "./componentes/pages/ContactEXTRA";
import Contacto from "./componentes/pages/ContactDatos";

function App() {
  return (
    <div className="App">
      <Navbarra data={true} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="explore" element={<Explorar />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="publish" element={<PublicarPropiedad />} />
        <Route path="quienes" element={<QuienesSomos />} />
        <Route path="contactar" element={<Contacto />} />
        <Route path="verprop" element={<VistaPropiedad />} />
        <Route path="properties" element={<EditarPerfil />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;
