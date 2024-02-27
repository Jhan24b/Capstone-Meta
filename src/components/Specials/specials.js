import Card from "../Card/card";
import "./specials.css";
import bruchetta from  "../../icons_assets/bruchetta.svg";

function Specials() {
  const greekSalad = require("../../icons_assets/greek salad.jpg");
  const lemonDessert = require("../../icons_assets/lemon dessert.jpg");

  const specialDishes = [
    {
      title: "Greek Salad",
      price: "$ 12.99",
      description:
        "The famous greek salad of crispy lettuce, peopers, olives and oir Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      picture: greekSalad,
    },
    {
      title: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with zalt and olive oil",
      picture: bruchetta,
    },
    {
      title: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight, from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
      picture: lemonDessert,
    },
  ];

  return (
    <section className="specials" id="#Hero">
      <div className={"encabezadoSpecials"}>
        <h2 className={"title"}>This weeks specials!</h2>
        <div className={"btnReserva"} aria-label="See online menu" onClick={()=>{console.log("future behavior")}}>Online Menu</div>
      </div>
      <div className="cards">
      {specialDishes.map((specialDish, idx) => {
        return <Card props={specialDish} key={idx}/>;
      })}
      </div>
    </section>
  );
}

export default Specials;
