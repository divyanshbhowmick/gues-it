import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: colors.primary,
    height: 80,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
});
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title ? title : "Header"}</Text>
    </View>
  );
};

export default Header;
