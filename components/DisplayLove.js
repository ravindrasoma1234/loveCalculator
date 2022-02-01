import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DisplayLove = (props) => {
  if (props.data == "loading") {
    return <Text style={styles.text}></Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Percentage :- {props.data.percentage}%</Text>
        <Text style={styles.text}>Result :- {props.data.result}</Text>
      </View>
    );
  }
};

export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#8c1aff",
    borderRadius: 25,
    padding: 20,
    marginLeft: 6,
    marginRight: 6,
  },
  text: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
