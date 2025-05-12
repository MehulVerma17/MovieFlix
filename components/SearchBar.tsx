import { icons } from "@/constants/icons";
import React from "react";
import { Dimensions, Image, TextInput, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth * 0.11; // 30% of screen width

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void; //? after name makes them optional
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View
      className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 h"
      style={{ height: cardWidth * 1.5 }}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
