import Text from "@/theme/components/Text";
import React from "react";
import { convertToHourMinutesSeconds } from "../../../helpers/timeFormater";
import Animated from "react-native-reanimated";
import Box from "@/theme/components/Box";
import Icon from "@/theme/components/Icon";

interface CompletedStatCardProps {
  title: string;
  content: number;
  enteringAnimation: any;
}
const CompletedStatCard = ({ title, content, enteringAnimation }: CompletedStatCardProps) => {
  return (
    <Animated.View entering={enteringAnimation}>
      <Box
        alignItems="center"
        justifyContent="center"
        width={130}
        borderWidth={1}
        borderColor="primary500"
        borderRadius="m"
      >
        <Box alignItems="center" justifyContent="center" height={50}>
          {content ? (
            <Text variant="headingMSecondary">{convertToHourMinutesSeconds(content)}</Text>
          ) : (
            <Icon name="checkcircleo" size="size16" color="scale100" />
          )}
        </Box>
        <Box
          bg="primary500"
          width="100%"
          alignItems="center"
          borderBottomRightRadius="s"
          borderBottomLeftRadius="s"
          py="space3"
        >
          <Text variant="bodyMSecondary">{title.toUpperCase()}</Text>
        </Box>
      </Box>
    </Animated.View>
  );
};

export default CompletedStatCard;

