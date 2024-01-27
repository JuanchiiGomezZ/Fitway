import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

//HOOKS
import AddExerciseCard from "./AddExerciseCard";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";

//COMPONENTS
import { WHITE_COLOR } from "../../../styles/styles";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";

export default AllExercises = () => {
  const [userExercises, setUserExercises] = useState(null);
  const { getUserAvilableExercises } = useExercisesStore();

  useEffect(() => {
    getUserAvilableExercises().then((res) => {
      setUserExercises(res);
    });
  }, []);

  return (
    <>
      {!userExercises ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Loader />
        </View>
      ) : (
        <>
          {userExercises?.length > 0 ? (
            <ScrollView contentContainerStyle={{ paddingBottom: 20, gap: 7 }}>
              {userExercises.map((item, index) => (
                <AddExerciseCard key={item.id} data={item} index={index} />
              ))}
            </ScrollView>
          ) : (
            <Text style={{ color: WHITE_COLOR, textAlign: "center" }}>Empty</Text>
          )}
        </>
      )}
    </>
  );
};
