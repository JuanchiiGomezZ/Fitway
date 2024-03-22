import React from "react";
import { ScrollView } from "react-native";
//HOOKS

//COMPONENTS
import Text from "@/theme/components/Text";
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import ExerciseLogCard from "./components/ExerciseLogCard";
import SeparatingLine from "../../components/SeparatingLine";
import Row from "@/theme/components/Row";
import Box from "@/theme/components/Box";

const WorkoutLogDetails = ({ route }: any) => {
  const { id } = route.params;
  const data = ["12x15kg", "10x20kg", "8x21kg", "-"];

  return (
    <ScreenContainer>
      <Header title="12/12/2023" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row justifyContent="space-between">
          <Text variant="headingL">Workout name</Text>
          <Text variant="headingS">01:43:12</Text>
        </Row>
        <Box marginVertical="space10" gap="space15">
          <ExerciseLogCard data={data} name="Press bench" />
          <SeparatingLine />
          <ExerciseLogCard data={data} name="Press bench" />
          <SeparatingLine />
          <ExerciseLogCard data={data} name="Press bench" />
        </Box>
      </ScrollView>
    </ScreenContainer>
  );
};

export default WorkoutLogDetails;
