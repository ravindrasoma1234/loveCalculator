import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import Constants from "expo-constants";
import DisplayLove from "./components/DisplayLove";

export default class App extends react.Component {
  state = {
    fname: "",
    sname: "",
    result: "loading",
  };

  submited() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "7636b59a4amsh29380dec5286004p16a6ccjsnf4ee882cf921",
          // useQueryString: true,
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        console.log(data2);
        this.setState({ result: data2 });
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Appbar.Header
            style={{
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "#8c1aff",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <Appbar.Content
              title="Love Calculator"
              style={{
                alignItems: "center",
              }}
            />
          </Appbar.Header>

          <View style={styles.container}>
            <Text style={styles.text}>Try Your Luck ! All The Best</Text>
            <View
              style={{
                borderColor: "#8c1aff",
                borderWidth: 2,
                borderRadius: 25,
                marginLeft: 6,
                marginRight: 6,
                marginTop: 20,
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "75%",
                  alignSelf: "center",
                  marginTop: 20,
                }}
                label="Your Name"
                value={this.state.fname}
                onChangeText={(text) => this.setState({ fname: text })}
              />
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "75%",
                  alignSelf: "center",
                  marginTop: 10,
                }}
                label="Your Crush"
                value={this.state.sname}
                onChangeText={(text) => this.setState({ sname: text })}
              />
              <Button
                icon="calculator"
                mode="outlined"
                onPress={() => console.log("Pressed")}
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  alignItems: "center",
                  // justifyContent: "center",
                  alignSelf: "center",
                  borderRadius: 100,
                  borderColor: "#8c1aff",
                  borderWidth: 2,
                }}
                onPress={this.submited.bind(this)}
              >
                Calculate
              </Button>
            </View>
            <DisplayLove data={this.state.result} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderWidth: 3,
    borderColor: "#8c1aff",
  },
  text: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
