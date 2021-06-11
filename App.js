import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/common-components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [isGameStarted, setGameStarted] = useState(false);
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {!isGameStarted ? (
        <StartGameScreen
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setGameStarted={setGameStarted}
        />
      ) : (
        <GameScreen selectedNumber={selectedNumber} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
