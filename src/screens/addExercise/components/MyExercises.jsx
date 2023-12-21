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
  const { getUserExsWithoutSelectedWkt } = useExercisesStore();
  const { isLoading } = useSelector((state) => state.exercises);

  useEffect(() => {
    getUserExsWithoutSelectedWkt().then((res) => {
      setUserExercises(res);
    });
  }, []);


  return (
    <>
      {isLoading || !userExercises ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Loader />
        </View>
      ) : (
        <>
          {userExercises?.length > 0 ? (
            <ScrollView>
              <View style={{ gap: 7 }}>
                {userExercises.map((item, index) => (
                  <AddExerciseCard key={item.id} data={item} index={index} />
                ))}
              </View>
            </ScrollView>
          ) : (
            <Text style={{ color: WHITE_COLOR, textAlign: "center" }}>Empty</Text>
          )}
        </>
      )}
    </>
  );
};
