import React, { useState } from "react";
import Card from "../common-components/Card";
import { Text, Button, StyleSheet, Alert, View } from "react-native";
import colors from "../../constants/colors";
import { generateRandomNumberBetween } from "../../utils/helper";

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
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: 80,
  },
});

const GuessNumberContainer = (props) => {
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomNumberBetween(1, 100, props.selectedNumber)
  );
  const guessHandler = (direction) => {
    if (direction === "lower") {
      if (props.selectedNumber > guessedNumber) {
        Alert.alert(
          "Don't Lie!😂",
          "Sorry, You know it right, what to choose?",
          [{ text: "Okay 😅", style: "destructive" }]
        );
        return;
      }
      setGuessedNumber(
        generateRandomNumberBetween(1, guessedNumber, guessedNumber)
      );
    } else if (direction === "higher") {
      if (props.selectedNumber < guessedNumber) {
        Alert.alert(
          "Don't Lie!😂",
          "Sorry, You know it right, what to choose?",
          [{ text: "Okay 😅", style: "destructive" }]
        );
        return;
      }
      setGuessedNumber(
        generateRandomNumberBetween(guessedNumber, 100, guessedNumber)
      );
    }
  };

  return (
    <Card style={styles.card}>
      <Text>Opponent's Guess</Text>
      <Text style={styles.selectedNumber}>{guessedNumber}</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button
            title="LOWER"
            color={colors.secondary}
            onPress={() => guessHandler("lower")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="HIGHER"
            color={colors.primary}
            onPress={() => guessHandler("higher")}
          />
        </View>
      </View>
    </Card>
  );
};

export default GuessNumberContainer;
