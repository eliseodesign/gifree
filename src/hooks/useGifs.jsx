import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Context/ContextData";
import getGifs from "../services/getGifs";
import getTrending from "../services/getTrending";

export function useGifs([type, info]) {
  // SEARCH  const {loading, gifs} = useGifs(["search", {keyword, limit}])
  if (type === "search") {
    const { keyword, limit } = info;
    const { loading, setLoading, setGifs, gifs, last, setLast } = useContext(ContextData);

    useEffect(() => {

      if(gifs.length === 0 || keyword !== last){
        console.log("jaja")
        setLoading(true);
        getGifs({ keyword, limit }).then((gifs) => {
          if (gifs.length === 0) {
            setLoading(false);
            setGifs([
              {
                id: "SinResultados",
                title: "no fount",
                url: "https://media1.giphy.com/media/ZXwdJuk172dQwAqMGv/200_d.gif?cid=c7",
              },
            ]);
            return;
          }
          setLoading(false);
          setGifs(gifs);
        })
      }

      
    }, [keyword]);

    return { loading, gifs };
  }

  //TRENDING const {gifs} = useGifs(["trend", {limit}])
  if (type === "trend") {
    const { limit } = info;


    const {trendGifs, setTrendGifs} = useContext(ContextData)
    if(trendGifs.length === 0) {
      useEffect(() => {
        getTrending({ limit }).then((gifs) => {
          
          setTrendGifs(gifs);
        });
      }, []);
       
      
    }
    
    
    return {trendGifs};
  }
}
