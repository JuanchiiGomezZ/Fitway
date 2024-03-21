import { StyleSheet, Text, View } from "react-native";
import { PADDING_BOTTOM, PADDING_HORIZONTAL, PADDING_TOP } from "../styles/styles";
import { BACKGROUND_COLOR } from "../styles/styles";
const ScreenContainer = ({ children, paddingBottom, ...props }) => {
  return (
    <View
      style={[styles.container, paddingBottom && { paddingBottom: PADDING_BOTTOM }, props.style]}
    >
      {children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
    backgroundColor: BACKGROUND_COLOR,
  },
});
