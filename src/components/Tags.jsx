import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../Context/ContextData.jsx";
import getTags from "../services/getTags.js"
import "./styles/Tags.css"
const Tags = () => {


  const {tags, setTags} = useContext(ContextData)
  console.log(tags)

  if(tags.length === 0){
    useEffect(() => {
    
      getTags(7)
        .then( tagsR => setTags(tagsR))
  
    }, [])
  
  }
  

  
  return ( 
    <>
    {/* <h2>Busquedas populares</h2> */}
    <div className="Tags">
      {tags.map(tag=> <Link to={"/search/:"+tag} key={tag}>{tag}</Link>)}
    </div> 
    </>
  );
}
 
export default Tags;