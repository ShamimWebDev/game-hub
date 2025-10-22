import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      
      .then((data) => {
        // console.log(" data:", data);
        
        setGames(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load games:", err));
  }, []);

  return (
    <GameContext.Provider value={{ games, loading }}>
      {children}
    </GameContext.Provider>
  );
};
