import React, { createContext, useState, useContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw Error("useWeatherContext must be in WeatherProvider");
  }

  return context;
};
