import { useContext } from "react";
import { ContextApp } from "../Context/ContextApp";

const ModalMenu = () => {
  const { capa } = useContext(ContextApp);
  return (
    <div ref={capa} className="capa">
      <a href="">A</a>
      <a href="">B</a>
      <a href="">C</a>
      <a href="">D</a>
    </div>
  );
};

export default ModalMenu;
