import React from "react";
import { Link } from "react-router-dom";
import PropTyepes from "prop-types";

export default function Room({ room }) {
  // console.log(room);
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="room image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          check
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTyepes.shape({
    name: PropTyepes.string.isRequired,
    slug: PropTyepes.string.isRequired,
    images: PropTyepes.arrayOf(PropTyepes.string).isRequired,
    price: PropTyepes.number.isRequired,
  }),
};
