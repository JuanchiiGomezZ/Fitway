import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { ORANGE_DARK_COLOR } from "../../../styles/styles";
import { ClassicInput } from "../../../components/Inputs";
import Loader from "../../../components/Loader";
import Animated, { Layout, FadeInDown } from "react-native-reanimated";
import ModalBase from "../../../components/ModalBase";
import SeparatingLine from "../../../components/SeparatingLine";

const PickerModal = ({ setSelected, toggleModal, data, type }) => {
  const [inputChange, setInputChange] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onPressCountry = (name, img) => {
    setSelected({ name, img });
    toggleModal();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <ModalBase toggleModal={toggleModal} title={type}>
      <ClassicInput
        setInputChange={setInputChange}
        inputChange={inputChange}
        placeholder={"Search"}
      />
      {isLoading ? (
        <View style={{ flex: 1 }}>
          <Loader />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.countriesContainer}>
          {data
            .filter((data) =>
              data.name.toLocaleLowerCase().includes(inputChange.toLocaleLowerCase()),
            )
            .map((item, index) => (
              <Animated.View
                key={item.name}
                entering={FadeInDown.delay(70 * index)}
                layout={Layout.delay(200)}
              >
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    onPressCountry(item.name, item.img);
                  }}
                >
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <Text style={styles.textName}>{item.name}</Text>
                </TouchableOpacity>
                <SeparatingLine/>
              </Animated.View>
            ))}
        </ScrollView>
      )}
    </ModalBase>
  );
};
export default PickerModal;

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    left: "5%",
    top: "15%",
    width: "100%",
    height: "85%",
    backgroundColor: "#151515",
    borderRadius: 10,
    padding: 20,
    zIndex: 5,
  },
  titleModal: {
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  input: {
    borderColor: "transparent",
    borderBottomColor: ORANGE_DARK_COLOR,
    borderWidth: 1,
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    width: "100%",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  countriesContainer: {
    marginTop: 20,
  },
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
