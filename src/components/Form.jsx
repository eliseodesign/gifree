import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import "./styles/Form.css";
import { Context } from "../Context/Context";

const Form = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {input, setInput} = useContext(Context)
  

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + input);
  }

  const [formDown, setformDown] = useState(false)
  window.onscroll = function() {
    if(window.scrollY > 150) setformDown(true)
    else setformDown(false)

  };
  

  return (
    <div className={formDown?"container-form active":"container-form"} >

      {/* <Logo   /> */}
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search">Search for stuff</label>
        <input
          onChange={handleChange}
          value={input}
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
        />
        <button type="submit">🔎</button>
      </form>

      
    </div>
  );
};

export default Form;
