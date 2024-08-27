import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const textInputHandler = (text) => {
    setEnteredText(text);
  };
  const onPressHandler = () => {
    if (enteredText === "") return;
    setGoals((previousGoals) => [
      ...previousGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    closeModal();
    setEnteredText("");
  };

  const deleteHandler = (key) => {
    setGoals(goals.filter((goal) => goal.key !== key));
  };

  const AddGoalModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color={"#5e0acc"} onPress={AddGoalModal} />

        <GoalInput
          setValue={textInputHandler}
          onPress={onPressHandler}
          value={enteredText}
          showModal={showModal}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData.item} onDelete={deleteHandler} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    gap: 20,
  },
  goalsContainer: {
    flex: 6,
    gap: 4,
  },
});
