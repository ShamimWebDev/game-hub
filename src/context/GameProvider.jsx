import React, { useState, useEffect } from "react";
import { GameContext } from "./GameContext";

/**
 * GameProvider Component
 * 
 * Manages the global state for game data.
 * Fetches game data from a local JSON file on mount and provides it to the application via Context.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 */
export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch game data from public/games.json
    // In a real application, this would be an API call to a backend service.
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load games:", err);
        setLoading(false);
      });
  }, []);

  return (
    <GameContext.Provider value={{ games, loading }}>
      {children}
    </GameContext.Provider>
  );
};
