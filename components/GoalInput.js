import React from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const GoalInput = ({ onPress, setValue, value, showModal, closeModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={setValue}
          value={value}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onPress} color={"#5e0acc"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#311b6b",
    gap: 14,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "90%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
