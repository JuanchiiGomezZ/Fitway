import { Text, View } from "react-native";
import React from "react";
import * as styles from "../../../../styles/tableStyles";
import { TableRow, TableHead, TableBodyText, TableContainer } from "../../../../components/Table";
import Row from "../../../../theme/components/Row";
import { FlatList } from "react-native-gesture-handler";
const TableExercise = ({ reps }) => {
  return (
    <TableContainer>
      <Row g="space10">
        <TableHead text="SETS" />
        <TableHead text="REPS" />
      </Row>
      {reps.map((rep, index) => (
        <TableRow g="space10" key={index}>
          <TableBodyText text={index + 1} />
          <TableBodyText text={rep} />
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default TableExercise;
