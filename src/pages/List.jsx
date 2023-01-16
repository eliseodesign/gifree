import Gif from '../components/Gif'
import { useParams } from "react-router-dom";

import "./style/List.css"
import { useGifs } from "../hooks/useGifs";


const List = () => {
  const  {keyword} = useParams()
  

  const {loading, gifs} = useGifs(["search",{keyword, limit:10}]) //my custom hooks for get gifs


  // const {loading, gifs} = useGifs(["search", {keyword, limit}]) 
  // const {gifs} = useGifs(["trend", {limit}]) 
  // const {gif} = useGifs(["getOne", {id}]) 

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
