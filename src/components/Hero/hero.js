import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="#Hero">
      <div className="content">
        <h2>Little Lemmon</h2>
        <h3>Chicago</h3>
        <p>
          Voluptate do excepteur ad veniam veniam duis ut. Ullamco consequat
          velit incididunt quis mollit cillum labore dolor officia aliquip
          tempor et qui ut. Eu minim nulla eu sit aliqua cupidatat velit est
          anim cillum est veniam laboris.
        </p>
        <div className="btnReserva" aria-label="Reservar una mesa" onClick={()=>{window.location.href = '/booking'}}>Reserve a Table</div>
      </div>
      <img
        src={require("../../icons_assets/restauranfood.jpg")}
        alt="bruschetas"
        width={"375px"}
      />
    </section>
  );
}

export default Hero;
