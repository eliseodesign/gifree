import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Form  from "../components/Form";
import Header from "../components/Header";
import {ContextData } from "../Context/ContextData";
import "./style/Home.css"

const Home = () => {

  const location = useLocation()

  const search = location.pathname.slice(8)
  const shortLocation = location.pathname.slice(0,12) 
  const {loading} = useContext(ContextData)
  return (
    <>
      <Header />
      <Form />
      { 
        location.pathname.length > 8 
        && loading === false 
        && shortLocation !== "/gif/detail/" 
        ? <p> Resultados de busqueda para {decodeURI(search)} </p> : null
        }
      
    </>
  );
};

export default Home;
