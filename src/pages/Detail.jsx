import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneGif from "../services/getOneGif"

const Detail = () => {

  const {id} = useParams()
  const [imgData, setImgData] = useState({})


  useEffect(() => {
    getOneGif({id})
      .then((img)=> {
        setImgData(img)
      })
    
  }, [])

  console.log(imgData)
  
  return ( 
  <div>
    <h2>{imgData.title}</h2>
    <p>@{imgData.username}</p>
    <img src={imgData.url} alt="" />
  </div> );
}
 
export default Detail;