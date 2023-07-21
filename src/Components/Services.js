import { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "You can enjoy your party, functions and favorite ocasions by our free cocktails. We provides free cocktails to our customers",
    },
    {
      icon: <FaBeer />,
      title: "free beers",
      info: "We are giving free beers to You so you can enjoy your party, functions and favorite ocasions. We provides free beers to our customers",
    },
    {
      icon: <FaHiking />,
      title: "enjoy hiking",
      info: "You can enjoy holidays with hiking. We give you best services for hiking adventure. Visit hurry!",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "We provides free shuttles van service to customers so they enjoy shuttle ride experience.",
    },
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article className="service" key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
