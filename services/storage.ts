import AsyncStorage from "@react-native-async-storage/async-storage";

const SAVED_MOVIES_KEY = "SAVED_MOVIES";

// Save a movie to AsyncStorage
export const saveMovie = async (movie: any) => {
  try {
    const existing = await AsyncStorage.getItem(SAVED_MOVIES_KEY);
    const movies = existing ? JSON.parse(existing) : [];

    // Avoid duplicates
    const alreadySaved = movies.some((m: any) => m.id === movie.id);
    if (!alreadySaved) {
      movies.push(movie);
      await AsyncStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(movies));
    }
  } catch (err) {
    console.error("Failed to save movie:", err);
  }
};

// Get all saved movies from AsyncStorage
export const getSavedMovies = async () => {
  try {
    const saved = await AsyncStorage.getItem(SAVED_MOVIES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error("Failed to fetch saved movies:", err);
    return [];
  }
};

// Remove a movie from AsyncStorage by its id
export const removeMovie = async (movieId: number) => {
  try {
    const existing = await AsyncStorage.getItem(SAVED_MOVIES_KEY);
    const movies = existing ? JSON.parse(existing) : [];

    // Filter out the movie to be removed
    const updatedMovies = movies.filter((movie: any) => movie.id !== movieId);

    // Update AsyncStorage with the new list
    await AsyncStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(updatedMovies));
  } catch (err) {
    console.error("Failed to remove movie:", err);
  }
};
