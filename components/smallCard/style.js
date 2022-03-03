import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardBody: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: "#52006A",
  },
  name: {
    fontSize: 25,
  },
  subs: {
    fontSize: 12,
    fontWeight: "200",
    opacity: 0.6,
  },
});

export default styles;
