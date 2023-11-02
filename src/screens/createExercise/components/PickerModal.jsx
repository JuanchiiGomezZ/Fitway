import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ORANGE_COLOR, ORANGE_DARK_COLOR } from "../../../styles/styles";
import { ClassicInput } from "../../../components/Inputs";
import BackdropModals from "../../../components/BackdropModals";
import Loader from "../../../components/Loader";
import Animated, { FadeIn, FadeOut, Layout, FadeInDown } from "react-native-reanimated";
import { CloseModalIcon } from "../../../components/Buttons";

const AnimatedView = Animated.createAnimatedComponent(View);
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
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View style={styles.modalContainer} entering={FadeIn} exiting={FadeOut}>
        <View style={styles.head}>
          <Text style={styles.titleModal}>{type}</Text>
          <CloseModalIcon action={toggleModal} />
        </View>
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
                <AnimatedView
                  key={index}
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
                  <View style={styles.line} />
                </AnimatedView>
              ))}
          </ScrollView>
        )}
      </Animated.View>
    </>
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
    zIndex: 4,
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
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
});
