import React from "react";
import Card from "../common-components/Card";
import { Text, Button, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  card: { width: 200 },
  selectedNumber: {
    padding: 10,
    height: 50,
    borderColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 1.5,
    textAlignVertical: "center",
    marginVertical: 10,
  },
});

const SelectedNumberContainer = (props) => {
  return (
    <Card style={styles.card}>
      <Text>Selected Number</Text>
      <Text style={styles.selectedNumber}>{props.selectedNumber}</Text>
      <Button
        title="Start Game"
        color={colors.primary}
        onPress={() => props.setGameStarted(true)}
      />
    </Card>
  );
};

export default SelectedNumberContainer;
