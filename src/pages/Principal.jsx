import { useEffect, useState } from "react";
import Gif from "../components/Gif";
import getGifs from "../services/getGifs";

import "./style/Principal.css"

const Principal = () => {
  const TOPICS = ["marvel","futbol", "memes", "chistes"];
  const [gifsTopics, setgifsTopics] = useState([]);

  const loadGifs = async () => {
    const promises = TOPICS.map(async (topic) => {
      const gifs = await getGifs({ keyword: topic, limit: 8 });
      return [topic, gifs];
    });

    Promise.all(promises).then((value) => {
      setgifsTopics(value);
    });
  };

  useEffect(() => {
    loadGifs();
  }, []);





  return (
    <div className="Principal">
      {gifsTopics.map((g, i) => {
          return (
            <div key={i} className="section-topic">
              <h2>{g[0]}</h2>


              <div className="carrusel">
                {g[1].map((gif)=><Gif key={gif.id} gif={gif}></Gif> )}
              </div>

            </div>
          );

        })}
    </div>
  );
};

export default Principal;
