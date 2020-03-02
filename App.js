import React, { Component } from "react";
import { Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native";

export default class App extends Component {
  state = {
    fadeValue: new Animated.Value(0)
  };

  _start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this._start()}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>Fade </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "snow",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "black",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});