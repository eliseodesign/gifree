import React from "react";
import "./styles/Gif.css";
import { Link, useLocation } from "react-router-dom";

const Gif = ({ gif }) => {
  const pathname = useLocation().pathname;

  return (
    <Link
      to={"/gif/detail/" + gif.id}
      className={pathname === "/" ? "Gif Gif-home" : "Gif"}
    >
      <h4>{gif.title}</h4>

      <img loading="lazy" src={gif.url} alt={gif.title} />
    </Link>
  );
};

export default Gif;
