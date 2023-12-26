import React, { useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import musclesData from "../../data/muscles.json";
import elementsData from "../../data/elements.json";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import AddImage from "./components/AddImage";
import BottomsheetImage from "./components/BottomsheetImage";
import { ClassicInputWithLabel, TextAreaWithLabel } from "../../components/Inputs";
import ElementCard from "../../components/ElementCard";
import PickerModal from "./components/PickerModal";
import ExerciseTypesModal from "./components/ExerciseTypesModal";
import { ButtonClassicLong } from "../../components/CustomButtons";

//STYLES
import { WHITE_COLOR } from "../../styles/styles";
import maxOrder from "../../helpers/maxOrder";

export default CreateExercise = () => {
  const { navigate } = useNavigation();
  const { workoutExercises } = useSelector((state) => state.workouts);

  const [pickerMuscle, togglePickerMuscle] = useToggle(false);
  const [pickerElement, togglePickerElement] = useToggle(false);
  const [pickerExerciseType, setPickerExerciseType] = useState(false);
  const [bottomsheet, setBottomsheet] = useState(false);

  const [exerciseImg, setExerciseImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [primaryMuscle, setPrimaryMuscle] = useState(null);
  const [element, setElement] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  const [errors, setErrors] = useState({});

  const toggleBottomsheet = (img) => {
    Keyboard.dismiss();
    if (img) {
      setExerciseImage(img);
    }
    setBottomsheet((prev) => !prev);
  };
  const togglePickerExerciseType = (type) => {
    Keyboard.dismiss();
    if (type) {
      setExerciseType(type);
    }
    setPickerExerciseType((prev) => !prev);
  };

  const exerciseGif =
    "https://newlife.com.cy/wp-content/uploads/2019/11/16241301-Dumbbell-Reverse-Bench-Press_Chest_360.gif";

  // const exerciseType = "ExerciseWithWeight";

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
    <ScreenContainer paddingBottom={true}>
      <Header title={"Create Exercise"} />

      <View style={styles.contentContainer}>
        <View style={{ width: "95%", gap: 25 }}>
          <AddImage toggleBottomsheet={toggleBottomsheet} exerciseImg={exerciseImg} />
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
              action={togglePickerMuscle}
              isValid={!primaryMuscle?.img && errors.muscle}
            />
            <ElementCard
              icon="dumbbell"
              name={element?.name}
              img={element?.img}
              title="Element"
              reverse={true}
              action={togglePickerElement}
              isValid={!element?.img && errors.element}
            />
            <ElementCard
              icon="human-handsup"
              name={null}
              title={exerciseType?.name || "Exercise type"}
              isValid={!exerciseType?.name && errors.exerciseType}
              action={() => togglePickerExerciseType(null)}
            />
          </View>
        </View>
      </View>

      <ButtonClassicLong
        text="Continue"
        action={handleContinue}
        disabled={activeButton}
        disabledAction={validateData}
      />

      {pickerMuscle && (
        <PickerModal
          data={musclesData}
          type="Muscles"
          toggleModal={togglePickerMuscle}
          setSelected={setPrimaryMuscle}
        />
      )}
      {pickerElement && (
        <PickerModal
          data={elementsData}
          type="Elements"
          toggleModal={togglePickerElement}
          setSelected={setElement}
        />
      )}
      {pickerExerciseType && <ExerciseTypesModal toggleModal={togglePickerExerciseType} />}
      {bottomsheet && <BottomsheetImage toggleBottomsheet={toggleBottomsheet} />}
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
