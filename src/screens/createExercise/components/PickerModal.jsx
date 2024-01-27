import { StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { ClassicInput } from "../../../components/Inputs";
import Animated, { Layout, FadeInDown } from "react-native-reanimated";
import ModalBase from "../../../components/ModalBase";
import SeparatingLine from "../../../components/SeparatingLine";
import { useNavigation } from "@react-navigation/native";

const PickerModal = ({ route }) => {
  const [inputChange, setInputChange] = useState("");
  const { navigate } = useNavigation();
  const { data, title } = route.params;
  return (
    <ModalBase title={title}>
      <ClassicInput
        setInputChange={setInputChange}
        inputChange={inputChange}
        placeholder={"Search"}
        style={{ marginTop: 5 }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {data
          .filter((data) => data.name.toLocaleLowerCase().includes(inputChange.toLocaleLowerCase()))
          .map((item, index) => (
            <Animated.View key={item.name} entering={FadeInDown.delay(70 * index)}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigate("CreateExercise", { item })}
              >
                <Image style={styles.image} source={{ uri: item.img }} />
                <Text style={styles.textName}>{item.name}</Text>
              </TouchableOpacity>
              <SeparatingLine />
            </Animated.View>
          ))}
      </ScrollView>
    </ModalBase>
  );
};
export default PickerModal;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 12,
  },
  textName: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
});
