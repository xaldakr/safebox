import { useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

function Agenda() {
  const [Fecha, setFecha] = useState(new Date());
  const [minDate] = useState(new Date());


  const onChage = (fecha) => {
    setFecha(fecha);
  };

  return (
    <div className="agenda-container">

      <h1 className="agenda-heading">AGENDAR VISITA</h1>
      <h2 className="agenda-subheading">ELEGIR FECHA:</h2>
      <div className="hour-subtitle">ELEGIR LA HORA DE LLEGADA</div>
        <TimePicker className="time-picker" />

        <div className="button-container">
          <button className="add-button">Agregar</button>
          <button className="cancel-button">Cancelar</button>
        </div>
      <div className="agenda-left">
        <DatePicker
          selected={Fecha}
          onChange={(fecha) => onChage(fecha)}
          minDate={minDate}
          inline
        />
      </div>
    </div>
  );
}

export default Agenda;


