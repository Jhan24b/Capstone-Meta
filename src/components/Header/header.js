import "./header.css";
import Logo from  '../../icons_assets/Logo.svg'
import Nav from "../Nav/nav";

function Header() {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="Logo Little Lemmon"
        width={"202px"}
      />
      <Nav/>
    </header>
  );
}

export default Header;
