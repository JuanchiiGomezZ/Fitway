import { StyleSheet, Text, View } from "react-native";
import {
  BACKGROUND_COLOR,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from "../styles/styles";

export default ScreenContainer = ({ children, paddingBottom }) => {
  return (
    <View style={[styles.container, paddingBottom && { paddingBottom: PADDING_BOTTOM }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
});
