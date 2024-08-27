import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "green" }}
        onPress={() => onDelete(itemData.key)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 2,
    backgroundColor: "orange",
    borderRadius: 8,
    marginBottom: 12,
  },
  goalText: {
    color: "fff",
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
