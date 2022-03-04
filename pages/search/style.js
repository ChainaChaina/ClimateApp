import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#bdbdbd",
    borderRadius: 5,
  },
  emptyList: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 18,
  },
  emptyListSub: {
    textAlign: "center",
    opacity: 0.7,
  },
});

export default styles;
