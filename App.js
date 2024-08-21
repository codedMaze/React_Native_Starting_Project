import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Starting ...</Text>
      <Text>Another piece of text</Text>
      <Button title="tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderWidth: 2,
    borderColor: "red",
    fontSize: 24,
    padding: 20,
    marginBottom: 20,
    fontWeight: "700",
    color: "green",
  },
});
