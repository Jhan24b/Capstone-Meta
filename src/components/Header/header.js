import "./header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={require("../../../src/img/aa38384d3942a55696d8070552aed2f4c190fc14.jpg")}
        alt="Logo Little Lemmon"
        width={"202px"}
      />
      <nav className="navigation">
        <a href="#Home">Home</a>
        <a href="#Menu">Menu</a>
        <a href="#About">About</a>
        <a href="/Reservations">Reservations</a>
        <a href="/Order">Order Online</a>
        <a href="/Login">Login</a>
      </nav>
    </header>
  );
}

export default Header;
