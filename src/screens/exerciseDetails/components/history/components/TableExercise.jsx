import React from "react";
import { FlatList } from "react-native";

//COMPONENTS
import Row from "@/theme/components/Row";
import { TableRow, TableHead, TableBodyText, TableContainer } from "@/components/Table";
import Text from "@/theme/components/Text";

function formatDate(prevDate) {
  const date = new Date(prevDate);
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const año = date.getFullYear();

  const formattedDay = dia < 10 ? "0" + dia : dia;
  const formattedMonth = mes < 10 ? "0" + mes : mes;

  return `${formattedDay}/${formattedMonth}/${año}`;
}

const RowReps = ({ index, reps, weight }) => {
  return (
    <TableRow g="space10">
      <TableBodyText text={index + 1} />
      <TableBodyText text={reps || 0} />
      <TableBodyText text={weight || 0} />
    </TableRow>
  );
};

export default TableExercise = ({ data }) => {
  return (
    <TableContainer>
      <Row justifyContent="space-between">
        <Row g="space10">
          <TableHead text="SETS" />
          <TableHead text="REPS" />
          <TableHead text="KG" />
        </Row>
        <Text variant="bodyLSemiBold">{formatDate(data.createdAt)}</Text>
      </Row>
      <FlatList
        data={data.stats}
        renderItem={({ item, index }) => (
          <RowReps index={index} reps={item.reps} weight={item.weight} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ gap: 5 }}
      />
    </TableContainer>
  );
};
