import "./footer.css";
import Logo from "../../icons_assets/Logo.svg";

function Footer() {
  
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo footer" />
      <div className="footerCard">
        <div className="titleFooter">Doormat navigation</div>
        <div className="footernav">
          <a className="footera" href="/">Home</a>
          <a className="footera" href="#Menu">Menu</a>
          <a className="footera" href="#About">About</a>
          <a className="footera" href="/booking">Reservations</a>
          <a className="footera" href="/">Order Online</a>
          <a className="footera" href="/">Login</a>
        </div>
      </div>
      <div className="footerCard">
        <div className="titleFooter">Contact</div>
        <div>
          Av. Chicago 444 - EE-UU <br />
          +1 999 9999 <br />
          lilLemon@meta.com
        </div>
      </div>
      <div className="footerCard">
        <div className="titleFooter">Social Media</div>
        <div className="social">
          <a className="footera" href="www.fb.com">Facebook</a>
          <a className="footera" href="www.instagram.com">Instagram</a>
          <a className="footera" href="www.tiktok.com">Tik Tok</a>
        </div>
      </div>
      {/* @Little Lemon <br /> All Rights Reserved - Meta <br /> 2024 - Anthony
      Torres */}
    </footer>
  );
}

export default Footer;
