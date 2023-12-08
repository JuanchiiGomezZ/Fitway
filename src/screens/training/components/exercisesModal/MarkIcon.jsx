import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { YELLOW_COLOR } from "../../../../styles/styles";

export default MarkIcon = () => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <FontAwesome5 name="dot-circle" size={20} color={YELLOW_COLOR} />
    </Animated.View>
  );
};
