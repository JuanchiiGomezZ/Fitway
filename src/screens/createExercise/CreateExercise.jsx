import React, { useEffect, useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";

//HOOKS
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import AddImage from "./components/AddImage";
import { ClassicInputWithLabel, TextAreaWithLabel } from "../../components/Inputs";
import ElementCard from "../../components/ElementCard";
import { ButtonClassicLong } from "../../components/CustomButtons";

//STYLES
import { WHITE_COLOR } from "../../styles/styles";
import maxOrder from "../../helpers/maxOrder";

export default CreateExercise = ({ route }) => {
  const { navigate } = useNavigation();
  const { workoutExercises } = useSelector((state) => state.workouts);
  const { type, item, image } = route.params || {};

  const [exerciseImg, setExerciseImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [primaryMuscle, setPrimaryMuscle] = useState(null);
  const [element, setElement] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (type) {
      setExerciseType({ value: type.value, name: type.name });
    }

    if (item?.type == "muscle") {
      setPrimaryMuscle({ value: item.value, name: item.name, img: item.img });
    }
    if (item?.type == "element") {
      setElement({ value: item.value, name: item.name, img: item.img });
    }
    if (image) {
      setExerciseImage(image);
    }
  }, [type, item, image]);

  const exerciseGif =
    "https://newlife.com.cy/wp-content/uploads/2019/11/16241301-Dumbbell-Reverse-Bench-Press_Chest_360.gif";

  const handleContinue = () => {
    const newExerciseData = {
      name,
      description,
      exerciseImg,
      primaryMuscle: primaryMuscle?.name,
      muscleImg: primaryMuscle?.img,
      element: element?.name,
      elementImg: element?.img,
      exerciseGif,
      exerciseType: exerciseType?.value,
      order: maxOrder(workoutExercises),
    };
    navigate("CreateExerciseSecond", newExerciseData);
  };

  const validateData = () => {
    let errors = {};

    if (name.trim() == "") errors.name = true;
    if (!primaryMuscle) errors.muscle = true;
    if (!element) errors.element = true;
    if (!exerciseType) errors.exerciseType = true;

    setErrors(errors);
  };

  const activeButton = name.trim() == "" || !primaryMuscle || !element || !exerciseType;

  return (
    <ScreenContainer paddingBottom>
      <Header title={"Create Exercise"} />

      <View style={styles.contentContainer}>
        <View style={{ width: "95%", gap: 25 }}>
          <AddImage image={exerciseImg} />
          <ClassicInputWithLabel
            setInputChange={setName}
            inputChange={name}
            placeholder="Name"
            label="Name *"
            isValid={name.trim() == "" && errors.name}
          />
          <TextAreaWithLabel
            setInputChange={setDescription}
            inputChange={description}
            placeholder="Take notes here..."
            label="Description"
          />
          <View style={styles.selectorsContainer}>
            <ElementCard
              icon="arm-flex"
              name={primaryMuscle?.name}
              img={primaryMuscle?.img}
              title="Muscle"
              action={() => navigate("MusclesModal")}
              isValid={!primaryMuscle?.img && errors.muscle}
            />
            <ElementCard
              icon="dumbbell"
              name={element?.name}
              img={element?.img}
              title="Element"
              reverse
              action={() => navigate("ElementsModal")}
              isValid={!element?.img && errors.element}
            />
            <ElementCard
              icon="human-handsup"
              name={null}
              title={exerciseType?.name || "Exercise type"}
              isValid={!exerciseType?.name && errors.exerciseType}
              action={() => navigate("ExerciseTypesModal", { navigateTo: "CreateExercise" })}
            />
          </View>
        </View>
      </View>

      <ButtonClassicLong
        text="Continue"
        action={handleContinue}
        disabled={activeButton}
        actionDisabled={validateData}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  selectorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
  exerciseType: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exerciseTypeText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "600",
  },
});
