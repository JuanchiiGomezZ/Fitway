import React from "react";

//HOOKS
import { useNavigation } from "@react-navigation/native";
import { SlideInLeft, SlideInRight } from "react-native-reanimated";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import CompletedStatCard from "./components/CompletedStatCard";
import Text from "@/theme/components/Text";
import { ButtonClassicLong } from "../../components/CustomButtons";
import Row from "@/theme/components/Row";

const TrainingFinished = () => {
  const { navigate } = useNavigation();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayOfWeekNumber = today.getDay();
  const dayName = daysOfWeek[dayOfWeekNumber];

  //   useEffect(() => {
  //     const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
  //       return true;
  //     });

  //     return () => backHandler.remove();
  //   }, []);

  return (
    <ScreenContainer pb="space10" justifyContent="center">
      <Text variant="headingLSecondary">CONGRATULATIONS!</Text>
      <Text variant="bodyLRegular" color="primary500">
        You completed today's workout!
      </Text>
      <Row justifyContent="space-around">
        <CompletedStatCard title={dayName} enteringAnimation={SlideInLeft.delay(300)} />
        <CompletedStatCard
          title={"TOTAL TIME"}
          content={30}
          enteringAnimation={SlideInRight.delay(600)}
        />
      </Row>

      <ButtonClassicLong
        text={"Continue"}
        action={() => {
          navigate("TabNavigation", { screen: "Home" });
        }}
      />
    </ScreenContainer>
  );
};

export default TrainingFinished;