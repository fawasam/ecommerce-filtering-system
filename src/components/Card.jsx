import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card-img" />

        <div className="card-details">
          <div className="card-title">{title}</div>
          <section className="card-reviews">
            {star}
            {star}
            {star}

            <span className="total-reviews">{star}</span>
          </section>
          <section className="card-price ">
            <div className="price">
              <del>{prevPrice}</del> <br />
              {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
