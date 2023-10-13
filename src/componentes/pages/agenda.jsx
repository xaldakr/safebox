import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';

function Agenda() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleAddVisit = () => {
    // Lógica para agregar la visita
  };

  const handleCancel = () => {
    // Lógica para cancelar
  };

  return (
    <div className="agenda-page">
      <h2>AGREGAR VISITA</h2>
      <div className="choose-date-section">
        <h3>ELEGIR FECHA</h3>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
        />
      </div>
      <div className="choose-time-section">
        <h3>ELEGIR LA HORA DE LLEGADA</h3>
        <TimePicker
          onChange={time => setSelectedTime(time)}
          value={selectedTime}
        />
      </div>
      <div className="buttons-section">
        <button onClick={handleAddVisit}>Agregar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
}

export default Agenda;