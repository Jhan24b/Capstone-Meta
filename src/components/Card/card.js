import "./card.css";

function Card(props) {
  const specialDish = props;
  const { title, price, description, picture } = specialDish.props;
  return (
    <div>
      <img
        className="picture"
        src={picture}
        alt={title}
        width={"240px"}
        heigth={"100px"}
      />
      <div className="card">
        <div>
        <div className="encabezado">
          <h4 className="cardTitle">{title}</h4>
          <p className={"cardPrice"}>{price}</p>
        </div>
        <p className="cardDescription">{description}</p>
        </div>
        <a className="btn-delivery" href="/order">Order a delivery</a>
      </div>
    </div>
  );
}

export default Card;
