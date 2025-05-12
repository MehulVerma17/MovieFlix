import { getSavedMovies } from "@/services/storage"; // import the function to get saved movies
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context
const SavedMoviesContext = createContext<any>(null);

// Custom hook to use the saved movies context
export const useSavedMovies = () => {
  return useContext(SavedMoviesContext);
};

// Create the provider component
export const SavedMoviesProvider = ({ children }: any) => {
  const [savedMovies, setSavedMovies] = useState<any[]>([]);

  // Load saved movies initially
  useEffect(() => {
    const loadSavedMovies = async () => {
      const movies = await getSavedMovies();
      setSavedMovies(movies);
    };

    loadSavedMovies();
  }, []); // This runs only once when the component mounts

  // Function to update saved movies (call this whenever a movie is saved or removed)
  const updateSavedMovies = async () => {
    const movies = await getSavedMovies();
    setSavedMovies(movies); // Update the savedMovies state with the latest list
  };

  return (
    <SavedMoviesContext.Provider
      value={{
        savedMovies,
        updateSavedMovies, // Make this function available to components
      }}
    >
      {children}
    </SavedMoviesContext.Provider>
  );
};

export default SavedMoviesProvider;
