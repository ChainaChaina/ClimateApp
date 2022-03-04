import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeApp from "./pages/home/home";
import Search from "./pages/search/search";
import { WeatherProvider } from "./context/WeatherContext";
import FullCard from "./pages/fullCard/fullCard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeApp} />
          <Stack.Screen name="Pesquisar" component={Search} />
          <Stack.Screen name="Clima" component={FullCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
