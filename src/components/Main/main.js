import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookingPage from "../BookingPage/bookingPage";
import HomePage from "../HomePage/homepage";
import NoPage from '../GenericPages/nopage';
import ConfirmedBooking from '../GenericPages/confirmedBooking';

function Main() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirm" element={<ConfirmedBooking />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;
