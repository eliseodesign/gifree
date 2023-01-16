import React from 'react';
import "./styles/Gif.css"
import { Link, useLocation } from 'react-router-dom';

const Gif = ({gif}) => {
  const pathname = useLocation().pathname

  // const colors = [
  // "rgb(31, 147, 255)",
  // "rgb(128, 31, 255)",
  // "rgb(255, 31, 255)",
  // "rgb(255, 39, 31),",
  // "rgb(255, 214, 31)"
  // ]
  
  // function colorRandom(){
    
  //   return {background:colors[0]}
  // }
  
  return ( 
  <Link 
    // style={()=> colorRandom()}

    to={"/gif/detail/"+gif.id} 
    className={pathname==="/"?"Gif Gif-home":"Gif"}>
   
    <h4>{gif.title}</h4>

   
    <img  loading="lazy" src={gif.url} alt={gif.title} />
  </Link> );
}
 
export default Gif;