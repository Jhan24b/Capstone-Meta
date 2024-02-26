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
        <div className="btnReserva" onClick={console.log("ji")}>Reserve a Table</div>
      </div>
      <img
        src={require("../../../src/img/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg")}
        alt="bruschetas"
        width={"375px"}
      />
    </section>
  );
}

export default Hero;