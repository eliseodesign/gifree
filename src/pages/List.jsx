import React, { useContext, useEffect, useState } from "react";
import Gif from '../components/Gif'
import getGifs from '../services/getGifs'
import { useParams } from "react-router-dom";

import "./style/List.css"
import { Context } from "../Context/Context";


const List = () => {
  const  {keyword} = useParams()

  const {loading, setLoading} = useContext(Context)

  const [gifs, setGifs] = useState([]);


  useEffect(() => {
    setLoading(true)

    getGifs({keyword, limit:10 }).then((gifs) => {
      if(gifs.length === 0) {
        setLoading(false)
        setGifs([{
          id:"SinResultados",
          title:"no fount",
          url:"https://media1.giphy.com/media/ZXwdJuk172dQwAqMGv/200_d.gif?cid=c7",
        }])
          return 
      }
      setLoading(false)
      setGifs(gifs)
    });
    
  }, [keyword]);


  return (
    <>
      { loading 
        ? 
          <div className="lds-roller"><div></div> <div></div> <div></div>  </div> 
        : 

      
        <div className="list">
          {
            gifs.map((gif) => {
          
              return(gif.id === "SinResultados" 
              ?
                <div key=".">
                  
                  <Gif gif={gif}/>
                  
                </div>
              : <Gif 
                  key={gif.id} 
                  gif={gif} /> )
                
              
            })
          }
        </div>

      }
    </>
  );
};

export default List;
