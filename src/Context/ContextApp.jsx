import React, { createContext, useRef, useState } from "react";

export const ContextApp = createContext({});

export const ProviderApp = ({ children }) => {
  const hamburger = useRef(null);
  const capa = useRef(null);

  const [input, setInput] = useState("");

  return (
    <ContextApp.Provider
      value={{ hamburger, capa, input, setInput}}
    >
      {children}
    </ContextApp.Provider>
  );
};
