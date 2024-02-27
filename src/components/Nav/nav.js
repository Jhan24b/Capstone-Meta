import './nav.css'

function Nav() {
  return (
      <nav>
        <ul className="navigation">
          <li><a href="/">Home</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </nav>
  );
}

export default Nav;