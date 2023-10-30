import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import musclesData from "../../data/muscles.json";
import elementsData from "../../data/elements.json";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import Header from "../../components/Header";
import AddImage from "./components/AddImage";
import BottomsheetImage from "./components/BottomsheetImage";
import { ClassicInputWithLabel, TextAreaWithLabel } from "../../components/Inputs";
import { OrangeButton } from "../../components/Buttons";
import ElementCard from "../../components/ElementCard";
import PickerModal from "./components/PickerModal";

//STYLES
import {
  BACKGROUND_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
  WHITE_COLOR,
} from "../../styles/styles";

export default CreateExercise = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [bottomsheet, setBottomsheet] = useState(false);
  const [pickerMuscle, setPickerMuscle] = useState(false);
  const [pickerElement, setPickerElement] = useState(false);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [primaryMuscle, setPrimaryMuscle] = useState(null);
  const [element, setElement] = useState(null);

  const toggleBottomsheet = (img) => {
    if (img) {
      setImage(img);
    }
    setBottomsheet((prev) => !prev);
  };

  const togglePickerMuscle = () => {
    setPickerMuscle((prev) => !prev);
  };

  const togglePickerElement = () => {
    setPickerElement((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header title={"Create Exercise"} />

      <View style={styles.contentContainer}>
        <View style={{ width: "90%", gap: 25 }}>
          <AddImage toggleBottomsheet={toggleBottomsheet} image={image} />
          <ClassicInputWithLabel
            setInputChange={setName}
            inputChange={name}
            placeholder="Name"
            label="Name"
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
            />
            <ElementCard
              icon="dumbbell"
              name={element?.name}
              img={element?.img}
              title="Element"
              reverse={true}
              action={togglePickerElement}
            />
          </View>
          <ElementCard icon="human-handsup" name={null} title="Exercise type" />
        </View>
      </View>
      <OrangeButton text="Continue" action={() => navigate("CreateExerciseSecond")} />
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
      {bottomsheet && <BottomsheetImage toggleBottomsheet={toggleBottomsheet} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  selectorsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
