import "./bookingForm.css";
import { useState } from "react";

function BookingForm({ date, availableTimes, onDateChange, SubmitForm }) {
  const [guests, setGuests] = useState(0);
  const [occasion, setOcassion] = useState("");
  const [time, setTime] = useState('');
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [ocasionError, setOcasionError] = useState(false);

  function validation(d) {
    if (d.date === "") {
      setDateError(true);
    }
    if (d.time === "") {
      setTimeError(true);
    }
    if(d.occasion === ""){
      setOcasionError(true);
    }
    return !dateError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataToSend = { date, time, guests, occasion };
    if (validation(dataToSend)) {
      SubmitForm(dataToSend);
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="contenedor">
        <label htmlFor="res-date">Choose date*</label>
        <input
          className="design"
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
        {dateError && (
          <label className="notification" htmlFor="error in choose a date">You must choose a date</label>
        )}
      </div>
      <div className="contenedor">
        <label htmlFor="res-time">Choose time*</label>
        <select
          className="design"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {timeError && (
          <label className="notification" htmlFor="error in choose a time">You must choose a time</label>
        )}
      </div>
      <div className="contenedor">
        <label className="descriptionInput" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="design"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
        />
      </div>
      <div className="contenedor">
        <label className="descriptionInput" htmlFor="occasion">
          Occasion*
        </label>
        <select
          className="design"
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOcassion(e.target.value);
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {ocasionError && (
          <label className="notification" htmlFor="error in choose an occasion">You must choose an occasion</label>
        )}
      </div>
      <input
        className="btnSubmit"
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation"
      />
    </form>
  );
}

export default BookingForm;
