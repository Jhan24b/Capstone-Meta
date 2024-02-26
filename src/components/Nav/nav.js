import './nav.css'

function Nav() {
  return (
      <nav>
        <ul className="navigation">
          <li><a href="/">Home</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="/Reservations">Reservations</a></li>
          <li><a href="/Order">Order Online</a></li>
          <li><a href="/Login">Login</a></li>
        </ul>
      </nav>
  );
}

export default Nav;