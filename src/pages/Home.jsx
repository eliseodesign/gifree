import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Form  from "../components/Form";
import Header from "../components/Header";
import { Context } from "../Context/Context";
import "./style/Home.css"

const Home = () => {
  
  const location = useLocation()

  const search = location.pathname.slice(8)
  const shorLocation = location.pathname.slice(0,12) 

  console.log(shorLocation)
  const {loading} = useContext(Context)
  return (
    <>
      <Header />
      <Form />
      { 
        location.pathname.length > 8 
        && loading === false 
        && shorLocation !== "/gif/detail/" 
        ? <p> Resultados de busqueda para ${search} </p> : null
        }
      
    </>
  );
};

export default Home;
