// updateTimes.test.js
import { render, screen } from "@testing-library/react";
import { updateTimes } from "./components/BookingPage/bookingPage";
import BookingPage from "./components/BookingPage/bookingPage";

test('updateTimes updates availableTimes based on the provided date', () => {
  const { update, availableTimes } = updateTimes(new Date());
  render(<BookingPage update={update} />);
  update();
  expect(availableTimes).toHaveLength(10);
});