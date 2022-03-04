import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#f5f6fa",
  },
  icon: {
    minWidth: 80,
    minHeight: 80,
    maxWidth: 80,
    margin: "auto",
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    margin: 20,
  },
  card: {
    margin: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  subtitle: {
    fontWeight: "bold",
    opacity: 0.5,
  },
  data: {
    fontSize: 20,
  },
});

export default styles;
