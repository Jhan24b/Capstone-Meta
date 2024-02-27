import CardComment from "./cardComment";

function CustomersSays() {
  const photo1 = require("./../../icons_assets/prof1.jpg");
  const photo2 = require("./../../icons_assets/prof2.jpg");
  const photo3 = require("./../../icons_assets/prof3.jpg");
  const photo4 = require("./../../icons_assets/prof4.jpg");
  const clients = [
    {
      name: "Daniel Bruchten",
      foto: photo1,
      comment: "Delicious food and confortable service",
      puntuation: 5,
    },
    {
      name: "Maria Delight",
      foto: photo2,
      comment: "Delicious food and confortable service",
      puntuation: 5,
    },
    {
      name: "Carlos Guhmberg",
      foto: photo3,
      comment: "Delicious food and confortable service",
      puntuation: 5,
    },
    {
      name: "Pia Curtney",
      foto: photo4,
      comment: "Delicious food and confortable service",
      puntuation: 5,
    },
  ];
  return (
    <section className="comments">
      <h2 className="titleComment">Testimonials</h2>
      <div className="testimonials">
        {clients.map((client, idx) => {
          return <CardComment client={client} key={idx} />;
        })}
      </div>
    </section>
  );
}

export default CustomersSays;
