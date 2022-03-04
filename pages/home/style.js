import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#f5f6fa",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    position: "absolute",
    bottom: 50,
    transform: [{ translateX: -37.5 }],
    left: "50%",
    minHeight: 75,
    minWidth: 75,
    borderRadius: 100,
    backgroundColor: "#2e86de",
    zIndex: 1,
  },
  buttonText: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
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
  spacer: {
    minHeight: 150,
  },
});

export default styles;
