import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

//HOOKS
import AddExerciseCard from "../components/AddExerciseCard";
import { WHITE_COLOR } from "../../../styles/styles";
import Loader from "../../../components/Loader";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

//COMPONENTS

export default AllExercises = () => {
  const [userExercises, setUserExercises] = useState(null);
  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Loader />
        </View>
      ) : (
        <ScrollView>
          <SearchBar />
          <FilterBar />
          {userExercises?.length > 0 ? (
            <View style={{ gap: 7 }}>
              {userExercises.map((item, index) => (
                <AddExerciseCard key={item.id} data={item} index={index} />
              ))}
            </View>
          ) : (
            <Text style={{ color: WHITE_COLOR, textAlign: "center", justifyContent: "center" }}>
              Empty
            </Text>
          )}
        </ScrollView>
      )}
    </>
  );
};
