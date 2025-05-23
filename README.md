# 🎬 MovieFlix

MovieFlix is a sleek React Native app built with Expo that allows users to search for movies via the TMDB API, view movie details, and locally save or remove movies. Additionally, it tracks trending movies based on in-app user searches using Appwrite as a backend.

---

## 📱 Features

- 🔍 **Search Movies**: Search for movies from [TMDB](https://www.themoviedb.org/) API.
- 📖 **Movie Details**: View detailed information about a selected movie.
- 💾 **Save/Remove Movies**: Save favorite movies locally using AsyncStorage.
- 🔥 **Trending Movies**: Discover what's trending based on what users search in the app (tracked with Appwrite).
- 🧭 **Smooth Navigation**: Built using `expo-router` for seamless navigation.
- 📦 **Persistent Storage**: Saved movies persist across app sessions.
- ✅ **Toast Feedback**: User actions like saving/removing show toasts using `react-native-toast-message`.

---

## 🛠️ Tech Stack

- **Frontend**: React Native (Expo), Tailwind CSS via `nativewind`
- **API**: TMDB API
- **Local Storage**: AsyncStorage
- **Backend (Trending Tracking)**: Appwrite
- **Navigation**: Expo Router
- **State Sharing**: React Context for saved movies

---

