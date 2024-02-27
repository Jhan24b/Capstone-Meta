import './cardComment.css'
function CardComment(props) {
  const { client } = props;
  return (
    <div className="comment">
      <div className="rating">{client.puntuation} ⭐</div>

      <div className="user">
        <img src={client.foto} alt={client.name} className="photouser" />{" "}
        <h4 className='nameClient'>{client.name}</h4>{" "}
      </div>

      <div className='detail'>{client.comment}</div>
    </div>
  );
}

export default CardComment;
