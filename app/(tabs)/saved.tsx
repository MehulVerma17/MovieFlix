import MovieCard from "@/components/MovieCard";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSavedMovies } from "../context/SavedMoviesContext";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

export default function saved() {
  const { savedMovies } = useSavedMovies();

  return (
    <View className="flex-1 bg-primary px-5 pt-10">
      {savedMovies.length === 0 ? (
        <Text className="text-lg text-white font-bold text-center mt-20">
          No saved movies yet.
        </Text>
      ) : (
        <>
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Saved Movies
          </Text>
          <FlatList
            data={savedMovies}
            renderItem={({ item }) => (
              <MovieCard
                adult={false}
                backdrop_path={""}
                genre_ids={[]}
                original_language={""}
                original_title={""}
                overview={""}
                popularity={0}
                video={false}
                vote_count={0}
                {...item}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              marginBottom: 10,
            }}
            className="pb-32"
          />
        </>
      )}
    </View>
  );
}
