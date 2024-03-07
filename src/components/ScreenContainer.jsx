import { StyleSheet, Text, View } from "react-native";
import { PADDING_BOTTOM, PADDING_HORIZONTAL, PADDING_TOP } from "../styles/styles";
import useActiveColors from "../hooks/useActiveColor";

const ScreenContainer = ({ children, paddingBottom, ...props }) => {
  const { background } = useActiveColors();
  return (
    <View
      style={[
        styles.container,
        paddingBottom && { paddingBottom: PADDING_BOTTOM },
        props.style,
        { backgroundColor: background },
      ]}
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
  },
});
