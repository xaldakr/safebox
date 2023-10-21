import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Saber from "./saber.png";
import "../../App.css";
const theme = {
  background: "#B8B8AA",
  headerBgColor: "#586F6B",
  headerFontColor: "#CFC0BD",
  headerFontSize: "20px",
  botBubbleColor: "#7F9183",
  botFontColor: "#F8EFEA",
  userBubbleColor: "#F8EFEA",
  userFontColor: "#586F6B",
};
const config = {
  botAvatar: Saber,
  floating: true,
  inputBoxPlaceholder: "Escribe tu mensaje aquí...",
};
export default class Contenido extends Component {
  render() {
    return (
      <div className="chatbot-container">
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={[
              {
                id: "1",
                message: "Hola bienvenido a Safebox,¿Cuál es tu nombre?",
                trigger: "2",
              },
              {
                id: "2",
                user: true,
                validator: (value) => {
                  if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                    return true;
                  } else {
                    return "Por favor ingresa un nombre valido.";
                  }
                },
                trigger: "3",
              },
              {
                id: "3",
                message: "¡Hola! {previousValue}, un placer saludarte",
                trigger: "4",
              },
              {
                id: "4",
                message: "¿Necesitas ayuda?",
                trigger: "5",
              },
              {
                id: "5",
                options: [
                  { value: "y", label: "Yes", trigger: "6A" },
                  { value: "n", label: "No", trigger: "6B" },
                ],
              },
              {
                id: "6A",
                message: "Grandioso; Veremos que podemos hacer por ti",
                trigger: "seleccion",
              },
              {
                id: "6B",
                message:
                  "Lo siento; si no tienes ninguna pregunta, nos vemos luego ❤",
                end: true,
              },
              {
                id: "seleccion",
                options: [
                  {
                    value: "f",
                    label: "Publicar una propiedad",
                    trigger: "7A",
                  },
                  { value: "b", label: "Ver notificaciones", trigger: "7B" },
                ],
              },
              {
                id: "7A",
                message: "Veo que elegiste la opción de publicar propiedad",
              },
              {
                id: "7B",
                message: "Veo que elegiste la opción de notificaciones",
              },
            ]}
            {...config}
          />
        </ThemeProvider>
      </div>
    );
  }
}
