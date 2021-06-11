import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import SelectedNumberContainer from "../components/StartScreen/SelectedNumberContainer";
import SelectNumberContainer from "../components/StartScreen/SelectNumberContainer";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
});

const StartGameScreen = ({
  selectedNumber,
  setSelectedNumber,
  setGameStarted,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a New Game!</Text>
        <SelectNumberContainer
          setIsConfirmed={setIsConfirmed}
          setSelectedNumber={setSelectedNumber}
        />
        {isConfirmed && (
          <SelectedNumberContainer
            selectedNumber={selectedNumber}
            setGameStarted={setGameStarted}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
