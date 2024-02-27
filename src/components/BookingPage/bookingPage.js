import "./bookingPage.css";

// import { fetchAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"; //THIS LINK IS BROKEN
import { fetchAPI, submitAPI } from "../../api/fakeAPI";

import BookingForm from "../BookingForm/bookingForm";
import { useReducer } from "react";

const errores = [];

// Definir acciones para el reductor
const actionTypes = {
  SET_DATE: "SET_DATE",
  UPDATE_TIMES: "UPDATE_TIMES",
};

// Reductor para gestionar el estado de availableTimes
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_DATE:
      return { ...state, date: action.payload };
    case actionTypes.UPDATE_TIMES:
      // Lógica para obtener los tiempos disponibles basados en la fecha (puedes personalizar esta lógica)
      const newAvailableTimes = updateTimes(action.payload);
      return { ...state, availableTimes: newAvailableTimes };
    default:
      return state;
  }
}

// Función de ejemplo para obtener los tiempos disponibles basados en la fecha
function updateTimes(selectedDate) {
  const availableTimes = fetchAPI(selectedDate);

  // Puedes almacenar los horarios disponibles en el estado o hacer otras operaciones necesarias
  return availableTimes;
}

function BookingPage() {
  const [state, dispatch] = useReducer(reducer, {
    date: "",
    time: "",
    guests: 0,
    occasion: "",
    availableTimes: ["--- Choose a date ---"],
  });

  // Función para manejar el cambio de fecha
  function handleDateChange(selectedDate) {
    dispatch({ type: actionTypes.SET_DATE, payload: selectedDate });
    dispatch({ type: actionTypes.UPDATE_TIMES, payload: selectedDate });
  }

  // Función para inicializar los tiempos disponibles (puede no ser necesaria dependiendo de tu lógica)
  function initializeTimes() {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD

    // Utiliza la función de la API para obtener los horarios disponibles
    const availableTimes = fetchAPI(formattedDate);

    // Puedes almacenar los horarios disponibles en el estado o hacer otras operaciones necesarias
    return availableTimes;
  }

  //Validacion para los datos

  // Funcion para subir los datos
  function SubmitForm(formData) {
    const response = submitAPI(formData);
    if (!response) {
      alert("Something went wrong, try again later");
    }else{
      window.location.href = '/confirm';
    }
  }

  // Inicializar los tiempos al montar el componente
  initializeTimes();

  return (
    <section className="booking">
      <h2 className="titleBooking">Reserve a Table</h2>
      {errores &&
        errores.map((error) => {
          return <div className="notification">{error}</div>;
        })}
      <BookingForm
        date={state.date}
        availableTimes={state.availableTimes}
        onDateChange={handleDateChange}
        SubmitForm={SubmitForm}
        errores={errores}
      />
    </section>
  );
}

export default BookingPage;