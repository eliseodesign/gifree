import { useEffect, useState } from "react";
import Gif from "../components/Gif";
import { useGifs } from "../hooks/useGifs";
import getGifs from "../services/getGifs";

import "./style/Principal.css";

const Principal = () => {
  const TOPICS = ["futbol", "super heroes ",  "memes"];
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

  // const {gifs} = useGifs(["trend", {limit}])
  const { trending } = useGifs(["trend", { limit: 10 }]);

  return (
    <div className="Principal">
      <div className="section-topic">
        <h2>Trending</h2>
        <div className="carrusel">
        {
          
          trending.map((gif) => <Gif key={gif.id} gif={gif} />)
        }

        </div>
      </div>

      {gifsTopics.map((g, i) => {
        return (
          <div key={i} className="section-topic">
            <h2>{g[0]}</h2>

            <div className="carrusel">
              {g[1].map((gif) => (
                <Gif key={gif.id} gif={gif}></Gif>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Principal;
