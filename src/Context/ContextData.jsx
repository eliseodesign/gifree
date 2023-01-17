import React, { createContext, useRef, useState } from "react";

export const ContextData = createContext({});

export const ProviderData = ({ children }) => {


  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [trendGifs, setTrendGifs] = useState([])
  const [tags, setTags] = useState([])
  const [last, setLast] = useState("")

  return (
    <ContextData.Provider
      value={{ loading, setLoading, gifs, setGifs, tags, setTags, trendGifs, setTrendGifs}}
    >
      {children}
    </ContextData.Provider>
  );
};
