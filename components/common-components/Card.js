import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "70%",
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
    elevation: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    backgroundColor: "white",
  },
});
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;
