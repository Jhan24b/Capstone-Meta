// initializeTimes.test.js
import { render, screen } from "@testing-library/react";
import { initializeTimes } from "./components/BookingPage/bookingPage";
import BookingPage from "./components/BookingPage/bookingPage";

test('initializeTimes initializes availableTimes with non-empty array', () => {
  const { initialize, availableTimes } = initializeTimes();
  render(<BookingPage />);
  initialize();
  expect(availableTimes).toHaveLength(10);
});
