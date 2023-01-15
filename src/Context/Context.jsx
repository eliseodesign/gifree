import React, { createContext, useRef, useState } from "react";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const hamburger = useRef(null);
  const capa = useRef(null);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ hamburger, capa, input, setInput, loading, setLoading }}
    >
      {children}
    </Context.Provider>
  );
};
