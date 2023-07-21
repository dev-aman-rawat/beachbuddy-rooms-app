import useState, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link, useLocation } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../Components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    const path = window.location.pathname.slice(7);
    // console.log(path);
    this.state = {
      slug: path,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    let room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    // console.log(defaultImg);
    // console.log(mainImg === images[0]);
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img src={image} alt="room image" key={index} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
              <h6>{breakfast && "enjoy free breakfast"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>extras</h3>
          <ul className="extras">
            {extras.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
