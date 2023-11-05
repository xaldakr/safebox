import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explorar } from "./componentes/pages/explorar";
import Login from "./componentes/pages/login";
import Signup from "./componentes/pages/singup";
import Navbarra from "./componentes/secciones/Navbarra";
import Home from "./componentes/home/Home";
import Agenda from "./componentes/pages/agenda";
import QuienesSomos from "./componentes/pages/quienessomos";
import PublicarPropiedad from "./componentes/pages/PublicarPropiedad";
import CustomFooter from "./componentes/home/footer";
import EditarPerfil from "./componentes/pages/EditarPerfil";
import VistaPropiedad from "./componentes/pages/VistaPropiedad";
import Ayuda from "./componentes/pages/ayuda";
import EditarPropiedad from "./componentes/pages/EditarPropiedad";
//import Contactanos from "./componentes/pages/ContactEXTRA";
import Contacto from "./componentes/pages/ContactDatos";
import Contenido from "./componentes/Bot/contenido";
import Notificaciones from "./componentes/pages/Notificaciones";
//Notificaciones

function App() {
  return (
    <div className="App">
      <Navbarra data={true} />
      <Contenido />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="notif" element={<Notificaciones />} />
        <Route path="edit" element={<EditarPropiedad />} />
        <Route path="explore" element={<Explorar />} />
        <Route path="Ayuda" element={<Ayuda />} />
        <Route path="login" element={<Login />} />
        <Route path="explore" element={<Explorar />} />
        <Route path="ContactDatos" element={<Contacto />} />
        <Route path="register" element={<Signup />} />
        <Route path="publish" element={<PublicarPropiedad />} />
        <Route path="quienes" element={<QuienesSomos />} />

        <Route path="contactar" element={<Contacto />} />
        <Route path="verprop" element={<VistaPropiedad />} />
        <Route path="agendar" element={<Agenda />} />
        <Route path="properties" element={<EditarPerfil />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;
