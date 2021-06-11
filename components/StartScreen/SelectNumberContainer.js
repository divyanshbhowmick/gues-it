import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Keyboard, Alert } from "react-native";
import Input from "../common-components/Input";
import Card from "../common-components/Card";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  card: {
    width: "70%",
    padding: 20,
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
  input: {
    textAlign: "center",
    width: 30,
  },
});
const SelectNumberContainer = ({ setSelectedNumber, setIsConfirmed }) => {
  const [enteredNumber, setEnteredNumber] = useState();

  const handleNumberInput = (value) => {
    setEnteredNumber(value.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setEnteredNumber("");
    setIsConfirmed(false);
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be chosen between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    setSelectedNumber(enteredNumber);
    setIsConfirmed(true);
    setEnteredNumber("");
    Keyboard.dismiss();
  };
  return (
    <Card style={styles.card}>
      <Text>Select a Number</Text>
      <Input
        blurOnSubmit
        style={styles.input}
        maxLength={2}
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText={handleNumberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button
            title="RESET"
            color={colors.secondary}
            onPress={resetHandler}
          />
        </View>
        <View style={styles.button}>
          <Button title="CONFIRM" color={colors.primary} onPress={onConfirm} />
        </View>
      </View>
    </Card>
  );
};

export default SelectNumberContainer;
