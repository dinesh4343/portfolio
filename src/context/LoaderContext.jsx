// src/context/LoaderContext.js
import React, { createContext, useContext, useState } from "react";
import Loader from "../components/Loader"; // ✅ Import loader component

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
