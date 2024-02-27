// Importa las funciones que necesitas probar
import { initializeTimes, reducer } from './components/BookingPage';

test('initializeTimes returns the expected value', () => {
  const initialState = {
    date: '',
    time: '',
    guests: 0,
    occasion: '',
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  };

  const result = initializeTimes();
  // Realiza las afirmaciones necesarias para verificar el resultado esperado
  expect(result).toEqual(initialState.availableTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
  const initialState = {
    date: '2022-03-01',
    time: '',
    guests: 0,
    occasion: '',
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  };

  const action = { type: 'UPDATE_TIMES', payload: '2022-03-01' };

  const result = reducer(initialState, action);
  // Realiza las afirmaciones necesarias para verificar el resultado esperado
  expect(result.availableTimes).toEqual(initialState.availableTimes);
});
